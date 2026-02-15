# GUIDE SYSTEM DOCUMENTATION
# India Tour - Tour Guide Manager

## OVERVIEW
The Guide side of India Tour is a complete tour management system where guides/tour managers can:
- Register and login
- View all bookings from customers
- Confirm or reject bookings
- Track earnings
- Manage tour information

---

## DATABASE STRUCTURE

### users table
```
id (int) - Primary Key
email (varchar) - Unique email
password_hash (varchar) - Hashed password
full_name (varchar) - Guide/User name
phone (varchar) - Contact number
dob (date) - Date of birth (users)
gender (varchar) - Gender (users)
city (varchar) - City
country (varchar) - Country
avatar (varchar) - Profile image path
role (varchar) - 'user' or 'guide'
created_at (timestamp) - Registration date
```

### tours table
```
id (int) - Primary Key
guide_id (int) - Foreign Key to users
title (varchar) - Tour name
destination (varchar) - Destination
description (text) - Tour details
price (decimal) - Price per person
created_at (timestamp) - When created
```

### bookings table
```
id (int) - Primary Key
user_id (int) - Customer who booked
tour_id (int) - Which tour was booked
guide_id (int) - Which guide owns the tour
name (varchar) - Customer name
email (varchar) - Customer email
phone (varchar) - Customer phone
destination (varchar) - Destination
tour_name (varchar) - Tour name
tour_price (decimal) - Price per person
preferred_date (date) - Booking date
persons (int) - Number of people
total_amount (decimal) - Calculated: price × persons
message (text) - Optional customer message
status (varchar) - 'Pending', 'Confirmed', 'Rejected'
created_at (timestamp) - Booking date
```

---

## ROUTES

### User Side (Already exists)
- `GET /` - Home page
- `GET /login` - User login
- `POST /login` - User login submit
- `GET /register` - User registration
- `POST /register` - User registration submit
- `GET /profile` - User profile
- `POST /profile` - Save profile changes
- `GET /destination/<name>` - Destination page
- `GET /destination/<dest_name>/place/<place_name>` - Place detail
- `GET /book-tour` - Booking form
- `POST /book-tour` - Submit booking

### Guide Side (NEW)
- `GET /guide/login` - Guide login page
- `POST /guide/login` - Guide login submit
- `GET /guide/register` - Guide registration page
- `POST /guide/register` - Guide registration submit
- `GET /guide/dashboard` - Guide main dashboard
- `POST /guide/booking/<booking_id>/confirm` - Confirm a booking
- `POST /guide/booking/<booking_id>/reject` - Reject a booking
- `GET /guide/logout` - Guide logout

---

## BOOKING WORKFLOW

### Step 1: User Logs In
- User enters email/password on `/login`
- System checks role = 'user'
- User redirected to home/dashboard

### Step 2: User Books a Tour
- User clicks "Book Tour" on destination page
- Fills form on `/book-tour`
- Booking is created with:
  - status = 'Pending'
  - guide_id = 1 (default guide)
  - total_amount = tour_price × persons

### Step 3: Guide Receives Booking
- Guide logs in at `/guide/login`
- System checks role = 'guide'
- Guide sees dashboard at `/guide/dashboard`
- Bookings table shows all bookings with status 'Pending'

### Step 4: Guide Confirms or Rejects
- Guide clicks "Confirm" button:
  - status changes to 'Confirmed'
  - Amount is counted in earnings
- Guide clicks "Reject" button:
  - status changes to 'Rejected'
  - Amount NOT counted in earnings

---

## KEY FEATURES

### 1. Role-Based Login
```python
if user['role'] == 'guide':
    redirect to /guide/dashboard
elif user['role'] == 'user':
    redirect to home
```

### 2. Guide-Only Bookings
```python
SELECT * FROM bookings WHERE guide_id = session['guide_id']
```
Only sees their own tour bookings, not others'.

### 3. Automatic Earnings Calculation
```python
earnings = SUM(total_amount) WHERE status = 'Confirmed'
```
Only confirmed bookings count toward earnings.

### 4. Booking Status Flow
```
Pending → Confirm → Confirmed (earnings counted)
Pending → Reject → Rejected (no earnings)
```

---

## FILE STRUCTURE

### Backend
- `app.py` - Main Flask application with all routes

### Frontend Templates
- `templates/guide-login.html` - Guide login form
- `templates/guide-register.html` - Guide registration form
- `templates/guide-dashboard.html` - Main dashboard

### CSS
- `static/css/guide-dashboard.css` - Guide dashboard styling

---

## TESTING GUIDE

### Create a Test Guide Account
1. Go to `http://localhost:5000/guide/register`
2. Fill in:
   - Full Name: "Test Guide"
   - Phone: "9876543210"
   - Email: "guide@test.com"
   - Password: "guide123"
3. Click "Create Guide Account"

### Login as Guide
1. Go to `http://localhost:5000/guide/login`
2. Enter: guide@test.com / guide123
3. You'll be taken to `/guide/dashboard`

### Create a Test Booking
1. Register as a regular user at `/register`
2. Login at `/login`
3. Go to a destination and click "Explore"
4. Click "Book Now" on a tour
5. Fill booking form and submit
6. Booking appears in guide dashboard as "Pending"

### Confirm/Reject Bookings
1. Log in as guide at `/guide/dashboard`
2. See the booking in "Pending" status
3. Click "Confirm" to accept and earn money
4. Or click "Reject" to decline

---

## CODE EXPLANATION

### Guide Login Route
```python
@app.route('/guide/login', methods=['GET', 'POST'])
def guide_login():
    # Checks role = 'guide'
    # Sets session['guide_id'] and session['user_type'] = 'guide'
    # Redirects to /guide/dashboard
```

### Guide Dashboard Route
```python
@app.route('/guide/dashboard')
def guide_dashboard():
    guide_id = session.get('guide_id')  # Get logged-in guide
    
    # Fetch only THIS guide's bookings
    cur.execute("""
        SELECT * FROM bookings WHERE guide_id = %s
    """, (guide_id,))
    
    # Calculate stats (tours, bookings, earnings)
```

### Confirm Booking Route
```python
@app.route('/guide/booking/<int:booking_id>/confirm', methods=['POST'])
def confirm_booking(booking_id):
    # Verify the booking belongs to THIS guide
    # Update status to 'Confirmed'
    # Earnings automatically recalculated on dashboard
```

---

## DASHBOARD STATS

The guide dashboard shows 4 stat cards:

1. **Total Tours Created**
   - Count of tours created by this guide
   - Formula: COUNT(*) FROM tours WHERE guide_id = X

2. **Total Bookings**
   - All bookings (pending + confirmed + rejected)
   - Formula: COUNT(*) FROM bookings WHERE guide_id = X

3. **Confirmed Bookings**
   - Only bookings with status = 'Confirmed'
   - Formula: COUNT(*) FROM bookings WHERE guide_id = X AND status = 'Confirmed'

4. **Total Earnings**
   - Sum of all confirmed booking amounts
   - Formula: SUM(total_amount) WHERE guide_id = X AND status = 'Confirmed'

---

## STYLING & DESIGN

- **Background**: Dark gradient (same as user side)
- **Cards**: White with soft shadows
- **Icons**: Font Awesome 6.5
- **Colors**:
  - Primary Blue: #3b82f6
  - Gold/Yellow: #ffd700
  - Green (Confirmed): #10b981
  - Red (Rejected): #ef4444
  - Orange (Pending): #f59e0b

---

## RESPONSIVE DESIGN

The guide dashboard is fully responsive:
- **Desktop (1024px+)**: Sidebar + Main content layout
- **Tablet (768px-1024px)**: Sidebar on top, single stat column
- **Mobile (<768px)**: Full-width, stacked elements

---

## SECURITY NOTES

✅ Features implemented:
- Password hashing with werkzeug
- Role-based access control
- Session management
- Guide can only see their own bookings

⚠️ Future enhancements:
- Email verification for registration
- Two-factor authentication
- Audit logs for booking changes
- Rate limiting on login attempts
- CSRF protection on forms

---

## EXAMPLE WORKFLOW

```
1. Guide registers: guide@example.com (role='guide')
2. User registers: user@example.com (role='user')

3. User logs in and books a tour:
   - Booking created: status='Pending', guide_id=1

4. Guide logs in and sees 1 new booking:
   - Dashboard shows: 1 total booking, 0 confirmed, ₹0 earnings

5. Guide clicks "Confirm":
   - Booking status changes to 'Confirmed'
   - Dashboard updates: 1 total, 1 confirmed, ₹5000 earnings

6. User logs in to profile and sees their booking as "Confirmed"
```

---

## QUICK START FOR DEVELOPERS

To add a new feature to the guide system:

1. **Add database column** (if needed):
   ```python
   cur.execute("ALTER TABLE bookings ADD COLUMN new_column VARCHAR(255)")
   ```

2. **Create route** in `app.py`:
   ```python
   @app.route('/guide/new-feature')
   def guide_new_feature():
       guide_id = session.get('guide_id')
       if not guide_id:
           return redirect(url_for('guide_login'))
   ```

3. **Create template** in `templates/guide-*.html`:
   ```html
   {% extends "base.html" %}
   {% block content %}
   ...
   {% endblock %}
   ```

4. **Add CSS** to `static/css/guide-dashboard.css`

5. **Test thoroughly** with different roles

---

## SUPPORT

For questions or issues:
- Check the database schema in `init_db()`
- Review the routes in `app.py`
- Test with example data
- Check Flask debug console for errors

Built with ❤️ for India Tour
