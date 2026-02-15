"""India Tour - Flask app with MySQL, bookings and email."""
import os
import psycopg2
import psycopg2.extras
from psycopg2 import errors
import json
from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

from config import Config

app = Flask(__name__, static_folder='static', static_url_path='')
app.config.from_object(Config)
app.secret_key = app.config['SECRET_KEY']

# Tour information mapping: destination -> tour_name -> tour details
TOUR_INFO = {
    'Kerala': {
        'Kerala Backwaters 3D': 'Day 1: Arrive in Alleppey, check-in to houseboat and start backwater cruise with stunning views\nDay 2: Full day houseboat ride through serene backwaters, experience village life and enjoy fresh seafood meals\nDay 3: Visit local spice markets, explore Alleppey beaches and lighthouse before departure',
        'Munnar-Thekkady 4D': 'Day 1: Travel to Munnar, check-in at resort surrounded by tea gardens with mountain views\nDay 2: Trek through lush tea plantations, visit tea factory and Echo Point scenic viewpoint\nDay 3: Drive to Thekkady, enjoy boat ride on Periyar Lake to spot elephants and wildlife\nDay 4: Visit spice plantations, watch traditional Kathakali performance and depart',
        'Full Kerala 7D': 'Day 1: Arrive in Kochi, explore Chinese fishing nets and Fort Kochi heritage sites\nDay 2-3: Backwater cruise on houseboat in Alleppey with authentic Kerala meals\nDay 4-5: Trek through Munnar tea gardens and visit Eravikulam National Park\nDay 6: Wildlife safari in Thekkady sanctuary and spice plantation tours\nDay 7: Relax at Kovalam beach and return',
        'Kerala Hills 5D': 'Day 1: Reach Munnar, explore tea estates and Mattupetty Dam views\nDay 2: Trek through misty mountains and visit Tea Museum\nDay 3: Travel to Wayanad, explore green valleys and waterfalls\nDay 4: Adventure activities - rock climbing, rappelling or nature walks\nDay 5: Visit local tribes, traditional markets and return',
        'Kerala Beaches 4D': 'Day 1: Arrive at Kovalam, relax on pristine beach and visit lighthouse\nDay 2: Water sports - surfing, parasailing and beach volleyball\nDay 3: Day trip to Varkala beach with cliffs and sunset views\nDay 4: Shopping at local markets and departure',
    },
    'Jaipur': {
        'Jaipur Royal Tour': 'Day 1: Visit Amber Fort with elephant ride, explore City Palace and museums\nDay 2: See the iconic Hawa Mahal (Palace of Winds) and Jantar Mantar ancient observatory\nDay 3: Shopping in colorful bazaars, traditional Rajasthani dinner with folk performance\nDay 4: Nahargarh Fort sunset views and local street food tour',
        'Rajasthan Heritage 5D': 'Day 1: Jaipur - explore royal palaces and forts\nDay 2: Camel safari in the Thar Desert with desert camping\nDay 3: Visit historic temples and local villages\nDay 4: Udaipur - lake palace tours and boat rides\nDay 5: Cultural performances and departure',
        'Golden Triangle 6D': 'Day 1: Delhi - visit India Gate, Red Fort and Raj Ghat\nDay 2: Delhi - explore Jama Masjid and Chandni Chowk market\nDay 3: Agra - see the magnificent Taj Mahal at sunrise\nDay 4: Agra Fort and Fatehpur Sikri\nDay 5: Jaipur - Amber Fort, City Palace and Hawa Mahal\nDay 6: Shopping and departure',
    },
    'Himachal': {
        'Shimla-Manali 5D': 'Day 1: Reach Shimla, explore colonial architecture and Mall Road\nDay 2: Visit Kali Bari temple and enjoy cable car rides with valley views\nDay 3: Drive through scenic mountain passes to Manali\nDay 4: Adventure sports - paragliding, river rafting or skiing\nDay 5: Old Manali exploration and departure',
        'Spiti Valley 7D': 'Day 1: Trek begins - acclimatization and village exploration\nDay 2-3: High altitude trekking through barren landscapes\nDay 4: Visit ancient Key monastery perched on mountainside\nDay 5: Trek to Dhankar village and lake with stunning views\nDay 6: Cultural exchange with local Tibetan communities\nDay 7: Return trek and departure',
        'Dharamshala & Bir 4D': 'Day 1: Reach Dharamshala, visit Dalai Lama temple and McLeod Ganj market\nDay 2: Explore Tibetan culture - monasteries and prayer wheels\nDay 3: Travel to Bir for paragliding experience with mountain views\nDay 4: Chill village walks and return',
    },
    'Udaipur': {
        'Udaipur City Tour': 'Day 1: Arrive Udaipur, sunset shikara ride on Lake Pichola viewing lake palaces\nDay 2: Visit City Palace, Jag Mandir island and Saheliyon Ki Bari gardens\nDay 3: Monsoon Palace with panoramic views and folk dance performance\nDay 4: Shopping and departure',
        'Rajasthan Lakes 4D': 'Day 1: Udaipur - lake palace tours and shikara rides\nDay 2: Visit temples and traditional Rajasthani villages\nDay 3: Travel to Pushkar - holy lake and camel safari in desert\nDay 4: Pushkar bazaar shopping and return',
    },
    'Kashmir': {
        'Kashmir Paradise 5D': 'Day 1: Arrive Srinagar, traditional houseboat stay on Dal Lake\nDay 2: Shikara rides, lotus gardens and local markets\nDay 3: Gulmarg meadows, cable car rides and mountain walks\nDay 4: Pahalgam valleys, Betaab Valley trekking\nDay 5: Return to Srinagar and departure',
        'Houseboat & Gulmarg 4D': 'Day 1-2: Houseboat experience on Dal Lake with Kashmiri hospitality\nDay 3: Gulmarg - meadows, skiing and cable car rides\nDay 4: Return to Srinagar and departure',
    },
    'Mumbai': {
        'Mumbai City Tour': 'Day 1: Gateway of India, Marine Drive sunset walk and Colaba area\nDay 2: Elephanta Caves and temple exploration\nDay 3: Bollywood studio tours and colonial architecture walk\nDay 4: Local street food tour and shopping',
        'Elephanta & Dharavi': 'Day 1: Ancient rock-cut caves with sculptures and historical significance\nDay 2: Dharavi local experience - potters, recyclers and street food\nDay 3: Hidden gems and local markets\nDay 4: Relaxation and departure',
    },
    'Bhutan': {
        'Bhutan Highlights 5D': 'Day 1: Arrive Paro, visit Paro Taktsang (Tiger\'s Nest) monastery trek\nDay 2: Explore Paro town and traditional temples\nDay 3: Travel to Thimphu - capital city exploration and dzongs\nDay 4: Punakha - visit fortress and river valleys\nDay 5: Return and departure',
        'Tiger\'s Nest Trek': 'Day 1: Trek begins - approach Tiger\'s Nest monastery on cliff\nDay 2: Reach the sacred monastery with breathtaking Himalayan views\nDay 3: Visit local villages and cultural sites\nDay 4: Return trek and exploration of Paro town',
    },
    'Rajasthan': {
        'Rajasthan Desert 7D': 'Day 1: Jaisalmer - explore golden city and fort\nDay 2: Desert safari with camel rides and desert camping\nDay 3: Sam Sand Dunes with sunset and cultural performances\nDay 4: Travel to Jodhpur - visit blue city and Mehrangarh Fort\nDay 5: Pushkar - holy lake, camel fair and temples\nDay 6: Ranthambore - tiger safari and wildlife photography\nDay 7: Return to Jaipur',
        'Ranthambore Safari 3D': 'Day 1: Arrive Ranthambore, evening wildlife safari to spot tigers\nDay 2: Early morning and afternoon safari drives in the sanctuary\nDay 3: Fort exploration and return',
    },
    'Gujarat': {
        'Gujarat Heritage 5D': 'Day 1: Rann of Kutch - white desert exploration and camel safari\nDay 2: Rann Utsav festival grounds and local communities\nDay 3: Travel to Gir Forest - Asiatic lion safari\nDay 4: Dwarka - temples and coastal exploration\nDay 5: Somnath temple and return',
        'Rann Utsav 3D': 'Day 1: Arrive Rann of Kutch, experience the white desert festival\nDay 2: Camel rides, camping and cultural performances\nDay 3: Traditional crafts, folk dances and return',
    },
    'Goa': {
        'Goa Beach 4D': 'Day 1: Calangute beach - relax and enjoy beach shacks with live music\nDay 2: Water sports - parasailing, jet skiing and beach volleyball\nDay 3: Anjuna flea market and nightlife\nDay 4: Sunrise yoga and departure',
        'Goa Heritage & Nature 5D': 'Day 1: Old Goa - ancient churches and Portuguese architecture\nDay 2: Dudhsagar waterfall trek with refreshing dip\nDay 3: Spice plantation tour and Ayurvedic treatments\nDay 4: Mahabalipuram beaches and water sports\nDay 5: Relax on beach and return',
    },
    'Tamil Nadu': {
        'Tamil Nadu Temples 5D': 'Day 1: Mahabalipuram - shore temple and rock carvings\nDay 2: Madurai Meenakshi temple - ancient architecture and rituals\nDay 3: Rameshwaram - holy island and Ramanathaswamy temple\nDay 4: Local village experiences and cultural performances\nDay 5: Return and departure',
        'Ooty & Kodaikanal 4D': 'Day 1: Ooty - hill station with toy train ride through tea gardens\nDay 2: Botanical gardens and mountain lake exploration\nDay 3: Travel to Kodaikanal - scenic lake and viewpoints\nDay 4: Adventure activities and return',
    }
}


def get_tour_description(destination, tour_name):
    """Look up tour description from TOUR_INFO."""
    if destination in TOUR_INFO and tour_name in TOUR_INFO[destination]:
        return TOUR_INFO[destination][tour_name]
    return ''


@app.context_processor
def inject_user():
    """Make `logged_in` and `user_email` available in all templates."""
    return {
        'logged_in': bool(session.get('user_id') or session.get('guide_id')),
        'user_email': session.get('user_email')
    }

try:
    from flask_mail import Mail, Message
    mail = Mail(app)
    HAS_MAIL = True
except Exception:
    HAS_MAIL = False


def get_db():
    database_url = os.environ.get("DATABASE_URL")

    if database_url.startswith("postgres://"):
        database_url = database_url.replace("postgres://", "postgresql://", 1)

    return psycopg2.connect(
        database_url,
        cursor_factory=psycopg2.extras.RealDictCursor
    )


def init_db():
    """Create users and bookings tables; optional demo user."""
    conn = get_db()
    try:
        with conn.cursor() as cur:
            cur.execute("""
                CREATE TABLE IF NOT EXISTS users (
                    id SERIAL PRIMARY KEY,
                    email VARCHAR(255) NOT NULL UNIQUE,
                    password_hash VARCHAR(255) NOT NULL,
                    full_name VARCHAR(255) DEFAULT NULL,
                    phone VARCHAR(50) DEFAULT NULL,
                    dob DATE,
                    gender VARCHAR(20),
                    city VARCHAR(100),
                    country VARCHAR(100),
                    role VARCHAR(20) DEFAULT 'user',
                    assigned_destination VARCHAR(100) DEFAULT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)

            cur.execute("""
                CREATE TABLE IF NOT EXISTS bookings (
                    id SERIAL PRIMARY KEY,
                    user_id INT NULL,
                    guide_id INT NULL,
                    name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    phone VARCHAR(50) NOT NULL,
                    destination VARCHAR(255) NOT NULL,
                    tour_name VARCHAR(255) NOT NULL,
                    tour_price VARCHAR(100) NOT NULL,
                    preferred_date DATE NOT NULL,
                    persons INT NOT NULL DEFAULT 1,
                    message TEXT,
                    total_amount DECIMAL(10,2) DEFAULT 0,
                    status VARCHAR(20) DEFAULT 'Pending',
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)

            cur.execute("""
                CREATE TABLE IF NOT EXISTS newsletter_subscribers (
                    id SERIAL PRIMARY KEY,
                    email VARCHAR(255) NOT NULL UNIQUE,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)

            cur.execute("SELECT COUNT(*) AS n FROM users")
            if cur.fetchone()['n'] == 0:
                cur.execute(
                    "INSERT INTO users (email, password_hash, role) VALUES (%s, %s, %s)",
                    ('demo@example.com', generate_password_hash('demo123'), 'user')
                )

        conn.commit()
    finally:
        conn.close()



def user_login(email, password):
    """Check credentials against MySQL. Returns True if valid."""
    conn = get_db()
    try:
        with conn.cursor() as cur:
            cur.execute("SELECT id, email, password_hash FROM users WHERE email = %s", (email,))
            row = cur.fetchone()
        if row and check_password_hash(row['password_hash'], password):
            return True
        return False
    except Exception:
        return False
    finally:
        conn.close()


def user_register(email, password, role='user', full_name=None, phone=None):
    """Create user in MySQL. Returns (True, None) or (False, error_message)."""
    conn = get_db()
    try:
        with conn.cursor() as cur:
            cur.execute(
                "INSERT INTO users (email, password_hash, role, full_name, phone) VALUES (%s, %s, %s, %s, %s)",
                (email, generate_password_hash(password), role, full_name, phone)
            )
        conn.commit()
        return True, None
    except psycopg2.errors.UniqueViolation:
        return False, "Email already registered."
    except Exception as e:
        return False, str(e)
    finally:
        conn.close()


def login_required(f):
    """Redirect to login with next=current URL if not logged in."""
    from functools import wraps
    @wraps(f)
    def wrapped(*args, **kwargs):
        if not session.get('user_id'):
            next_url = request.url
            return redirect(url_for('login', next=next_url))
        return f(*args, **kwargs)
    return wrapped


@app.route('/')
def index():
    return render_template('index.html', logged_in=bool(session.get('user_id')))


@app.route('/newsletter', methods=['POST'])
def newsletter_subscribe():
    email = request.form.get('email', '').strip().lower()

    if not email:
        return jsonify({'success': False, 'message': 'Please enter your email address.'}), 400

    conn = get_db()
    try:
        with conn.cursor() as cur:
            cur.execute(
                "INSERT INTO newsletter_subscribers (email) VALUES (%s)",
                (email,)
            )
        conn.commit()
        return jsonify({'success': True, 'message': 'Thank you! You are subscribed.'}), 200

    except psycopg2.errors.UniqueViolation:
        conn.rollback()
        return jsonify({'success': False, 'message': 'This email is already subscribed.'}), 409

    except Exception:
        conn.rollback()
        return jsonify({'success': False, 'message': 'Something went wrong.'}), 500

    finally:
        conn.close()


@app.route('/login', methods=['GET', 'POST'])
def login():
    next_url = request.args.get('next') or url_for('index')
    if request.method == 'POST':
        email = request.form.get('email', '').strip()
        password = request.form.get('password', '')
        next_url = request.form.get('next') or url_for('index')
        if not email or not password:
            flash('Please enter email and password.', 'error')
            return render_template('login.html', next_url=next_url)
        if user_login(email, password):
            conn = get_db()
            try:
                with conn.cursor() as cur:
                    cur.execute("SELECT id FROM users WHERE email = %s", (email,))
                    row = cur.fetchone()
                if row:
                    session['user_id'] = row['id']
                    session['user_email'] = email
                    session.permanent = True
                    return redirect(next_url)
            finally:
                conn.close()
        flash('Invalid email or password.', 'error')
        return render_template('login.html', next_url=next_url)
    return render_template('login.html', next_url=next_url)


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.form.get('email', '').strip()
        password = request.form.get('password', '')

        if not email or not password:
            flash('Please enter email and password.', 'error')
            return render_template('register.html')

        ok, err = user_register(email, password, role='user')
        if ok:
            flash('Account created. Please sign in.', 'success')
            return redirect(url_for('login'))

        flash(err or 'Registration failed.', 'error')

    return render_template('register.html')

@app.route('/guide-register', methods=['GET', 'POST'])
def guide_register():

    all_destinations = [
        "Kerala", "Jaipur", "Goa", "Himachal",
        "Kashmir", "Mumbai","Gujarat","Bhutan"
    ]

    conn = get_db()

    try:
        with conn.cursor() as cur:

            # Get already assigned destinations
            cur.execute("""
                SELECT assigned_destination 
                FROM users 
                WHERE role = 'guide'
                AND assigned_destination IS NOT NULL
            """)
            rows = cur.fetchall()

            taken_destinations = [r['assigned_destination'] for r in rows]

            available_destinations = [
                d for d in all_destinations if d not in taken_destinations
            ]

            if request.method == 'POST':

                full_name = request.form.get('full_name')
                email = request.form.get('email')
                password = request.form.get('password')
                destination = request.form.get('assigned_destination')

                # Safety check again
                cur.execute("""
                    SELECT id FROM users
                    WHERE role='guide'
                    AND assigned_destination=%s
                """, (destination,))
                existing = cur.fetchone()

                if existing:
                    flash("This destination already has a guide!", "error")
                    return redirect(url_for('guide_register'))

                # Insert new guide
                cur.execute("""
                    INSERT INTO users
                    (email, password_hash, full_name, role, assigned_destination)
                    VALUES (%s, %s, %s, %s, %s)
                """, (
                    email,
                    generate_password_hash(password),
                    full_name,
                    'guide',
                    destination
                ))

                conn.commit()

                flash("Guide registered successfully!", "success")
                return redirect(url_for('guide_login'))

    finally:
        conn.close()

    return render_template(
        'guide-register.html',
        destinations=available_destinations
    )

@app.route('/guide/login', methods=['GET', 'POST'])
def guide_login():
    next_url = request.args.get('next') or url_for('index')
    if request.method == 'POST':
        email = request.form.get('email', '').strip()
        password = request.form.get('password', '')
        next_url = request.form.get('next') or url_for('index')
        if not email or not password:
            flash('Please enter email and password.', 'error')
            return render_template('guide-login.html', next_url=next_url)
        # verify credentials
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT id, email, password_hash, role FROM users WHERE email = %s", (email,))
                row = cur.fetchone()
            if row and check_password_hash(row['password_hash'], password):
                if row.get('role') != 'guide':
                    flash('No guide account found for this email.', 'error')
                    return render_template('guide-login.html', next_url=next_url)
                session['guide_id'] = row['id']
                session['user_email'] = email
                session.permanent = True
                return redirect(url_for('guide_dashboard') if 'guide_dashboard' in app.view_functions else next_url)
        finally:
            conn.close()
        flash('Invalid email or password.', 'error')
        return render_template('guide-login.html', next_url=next_url)
    return render_template('guide-login.html', next_url=next_url)


@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))


@app.route('/guide/logout')
def guide_logout():
    session.clear()
    return redirect(url_for('guide_login'))


@app.route('/api/current_user')
def api_current_user():
    """Return current user/guide auth status as JSON."""
    import json
    logged_in = bool(session.get('user_id') or session.get('guide_id'))
    return json.dumps({
        'logged_in': logged_in,
        'email': session.get('user_email'),
        'user_id': session.get('user_id'),
        'guide_id': session.get('guide_id'),
        'avatar': None
    }), 200, {'Content-Type': 'application/json'}


@app.route('/more-places')
def more_places():
    """More destinations — no login or payment, just explore."""
    return render_template('more-places.html', logged_in=bool(session.get('user_id')))


@app.route('/destination/<name>')
def destination(name):
    """Destination page: places, hotels, tours — Book Tour links to book-tour page."""
    return render_template(
        'destination.html',
        name=name,
        static_base=url_for('static', filename='').rstrip('/') + '/'
    )


@app.route('/destination/<dest_name>/place/<place_name>')
def place_detail(dest_name, place_name):
    """Place detail page: about the place, hotels, restaurants, spots to visit (e.g. Munnar in Kerala)."""
    return render_template(
        'place-detail.html',
        dest_name=dest_name,
        place_name=place_name,
        static_base=url_for('static', filename='').rstrip('/') + '/'
    )
def send_booking_email(to_email, name, destination, tour_name, tour_price, persons):
    """Dummy email sender (safe if email not configured)."""
    print(f"""
--- BOOKING EMAIL ---
To: {to_email}
Name: {name}
Destination: {destination}
Tour: {tour_name}
Price: {tour_price}
Persons: {persons}
(Date will be assigned by guide)
---------------------
""")
    return True


@app.route('/book-tour', methods=['GET', 'POST'])
def book_tour():
    """Show tour info and booking form; on POST save to DB and send email."""
    destination_name = request.args.get('destination') or ''
    tour_name = request.args.get('tour') or ''
    tour_price = request.args.get('price') or ''

    if request.method == 'POST':
        name = request.form.get('name', '').strip()
        email = request.form.get('email', '').strip()
        phone = request.form.get('phone', '').strip()
        persons = request.form.get('persons', '1')
        preferred_date = request.form.get('preferred_date')
        destination_name = request.form.get('destination', '').strip()
        tour_name = request.form.get('tour_name', '').strip()
        tour_price = request.form.get('tour_price', '').strip()

        if not all([name, email, phone, tour_name, destination_name, persons,preferred_date]):
            flash('Please fill all required fields.', 'error')
            return render_template(
                'book-tour.html',
                destination=destination_name,
                tour_name=tour_name,
                tour_price=tour_price,
                booking_success=False
            )

        try:
            persons_int = max(1, int(persons))
        except ValueError:
            persons_int = 1

        import re
        price_number = re.sub(r"[^\d.]", "", tour_price)
        price_per_person = float(price_number) if price_number else 0
        total_amount = price_per_person * persons_int

        conn = get_db()

        try:
            with conn.cursor() as cur:
                # Assign guide automatically by destination
                dest_clean = destination_name.strip().lower()

                cur.execute("""
                    SELECT id FROM users
                    WHERE role = 'guide'
                    AND LOWER(assigned_destination) = %s
                    LIMIT 1
                """, (dest_clean,))

                guide = cur.fetchone()
                guide_id = guide['id'] if guide else None

                cur.execute("""
    INSERT INTO bookings
    (user_id, guide_id, name, email, phone, destination, tour_name, tour_price,
     preferred_date, persons, total_amount, status)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
""", (
    session.get('user_id'),   # user_id (logged-in user)
    guide_id,
    name,
    email,
    phone,
    destination_name,
    tour_name,
    tour_price,
    preferred_date,
    persons_int,
    total_amount,
    'Pending'
))

            conn.commit()

        except Exception as e:
            conn.rollback()
            print("BOOKING ERROR:", e)
            flash("Something went wrong. Please try again.", "error")
            return render_template(
                'book-tour.html',
                destination=destination_name,
                tour_name=tour_name,
                tour_price=tour_price,
                booking_success=False
            )

        finally:
            conn.close()

        send_booking_email(email, name, destination_name, tour_name, tour_price, persons_int)

        return render_template(
            'book-tour.html',
            destination=destination_name,
            tour_name=tour_name,
            tour_price=tour_price,
            booking_success=True,
            booking_name=name,
            booking_email=email
        )

    # GET request
    return render_template(
        'book-tour.html',
        destination=destination_name,
        tour_name=tour_name,
        tour_price=tour_price,
        booking_success=False
    )

@app.route("/guide/dashboard")
def guide_dashboard():

    if not session.get('guide_id'):
        return redirect(url_for('guide_login'))

    guide_id = session['guide_id']

    conn = get_db()
    with conn.cursor() as cur:

        # Get guide's info (name and destination)
        cur.execute("""
            SELECT full_name, assigned_destination 
            FROM users 
            WHERE id = %s
        """, (guide_id,))
        guide = cur.fetchone()

        if not guide or not guide['assigned_destination']:
            flash("No destination assigned to this guide.", "error")
            return redirect(url_for('guide_login'))

        guide_name = guide['full_name']
        destination = guide['assigned_destination']

        # Fetch bookings ONLY for this destination
        cur.execute("""
            SELECT * FROM bookings
            WHERE destination = %s
            ORDER BY created_at DESC
        """, (destination,))
        bookings = cur.fetchall()

        # Stats for only this destination
        cur.execute("""
            SELECT COUNT(*) AS total 
            FROM bookings 
            WHERE destination = %s
        """, (destination,))
        total_bookings = cur.fetchone()["total"]

        cur.execute("""
            SELECT COUNT(*) AS confirmed 
            FROM bookings 
            WHERE destination = %s AND status='Confirmed'
        """, (destination,))
        confirmed_bookings = cur.fetchone()["confirmed"]

        cur.execute("""
            SELECT COALESCE(SUM(total_amount),0) AS earnings 
            FROM bookings 
            WHERE destination = %s AND status='Confirmed'
        """, (destination,))
        earnings = cur.fetchone()["earnings"]

    conn.close()

    return render_template(
        "guide-dashboard.html",
        guide_name=guide_name,
        assigned_destination=destination,
        bookings=bookings,
        stats={
            "total_bookings": total_bookings,
            "confirmed_bookings": confirmed_bookings,
            "total_earnings": earnings
        }
    )


@app.route('/guide/profile', methods=['GET', 'POST'])
def guide_profile():
    if not session.get('guide_id'):
        flash('Please login to view your profile.', 'error')
        return redirect(url_for('guide_login'))

    guide_id = session['guide_id']
    conn = get_db()

    try:
        with conn.cursor() as cur:

            # Get guide info
            cur.execute("""
                SELECT id, email, full_name, phone, assigned_destination, created_at
                FROM users WHERE id = %s
            """, (guide_id,))
            guide = cur.fetchone()

            if not guide:
                flash('Guide not found.', 'error')
                return redirect(url_for('guide_logout'))

            # If profile form submitted → update guide table
            if request.method == 'POST':
                full_name = request.form.get('full_name', '').strip()
                phone = request.form.get('phone', '').strip()

                cur.execute("""
                    UPDATE users
                    SET full_name=%s, phone=%s
                    WHERE id=%s
                """, (full_name, phone, guide_id))
                conn.commit()

                # Reload updated guide info
                cur.execute("""
                    SELECT id, email, full_name, phone, assigned_destination, created_at
                    FROM users WHERE id = %s
                """, (guide_id,))
                guide = cur.fetchone()

                flash('Profile updated successfully!', 'success')

            # Get bookings for this guide's destination
            cur.execute("""
                SELECT id, destination, tour_name, tour_price, preferred_date,
                       persons, message, email, phone, created_at, status
                FROM bookings
                WHERE destination = %s
                ORDER BY created_at DESC
            """, (guide['assigned_destination'],))
            bookings = cur.fetchall()

            # Add tour descriptions
            for booking in bookings:
                booking['tour_description'] = get_tour_description(
                    booking['destination'], booking['tour_name']
                )

    finally:
        conn.close()

    return render_template(
        'guide-profile.html',
        guide=guide,
        bookings=bookings,
        logged_in=True,
        active_tab='personal'
    )


@app.route('/profile', methods=['GET', 'POST'])
def profile():
    if not session.get('user_id'):
        flash('Please login to view your profile.', 'error')
        return redirect(url_for('login'))

    user_id = session['user_id']
    conn = get_db()

    try:
        with conn.cursor() as cur:

            # ✅ Always get user info FIRST
            cur.execute("""
                SELECT id, email, full_name, phone, dob, gender, city, country, created_at
                FROM users WHERE id = %s
            """, (user_id,))
            user = cur.fetchone()

            if not user:
                flash('User not found.', 'error')
                return redirect(url_for('logout'))

            # ✅ If profile form submitted → update user table
            if request.method == 'POST':
                full_name = request.form.get('full_name', '').strip()
                phone = request.form.get('phone', '').strip()
                dob = request.form.get('dob') or None
                gender = request.form.get('gender') or None
                city = request.form.get('city', '').strip()
                country = request.form.get('country', '').strip()

                cur.execute("""
                    UPDATE users
                    SET full_name=%s, phone=%s, dob=%s, gender=%s, city=%s, country=%s
                    WHERE id=%s
                """, (full_name, phone, dob, gender, city, country, user_id))
                conn.commit()

                # 🔄 Reload updated user info
                cur.execute("""
                    SELECT id, email, full_name, phone, dob, gender, city, country, created_at
                    FROM users WHERE id = %s
                """, (user_id,))
                user = cur.fetchone()

                flash('Profile updated successfully!', 'success')

            # ✅ Now get bookings SEPARATELY
            cur.execute("""
                SELECT id, destination, tour_name, tour_price, preferred_date,
                       persons, message, email, phone, created_at, status
                FROM bookings
                WHERE user_id = %s
                ORDER BY created_at DESC
            """, (user_id,))
            bookings = cur.fetchall()

            # Add tour descriptions
            for booking in bookings:
                booking['tour_description'] = get_tour_description(
                    booking['destination'], booking['tour_name']
                )

    finally:
        conn.close()

    return render_template(
        'profile.html',
        user=user,
        bookings=bookings,
        logged_in=True,
        active_tab='personal'
    )

@app.route('/info')
def info():
    return render_template('info.html')


@app.route('/guide/booking/<int:booking_id>/confirm')
def confirm_booking(booking_id):
    conn = get_db()
    try:
        with conn.cursor() as cur:
            cur.execute("""
                UPDATE bookings
                SET status = 'Confirmed'
                WHERE id = %s
            """, (booking_id,))
        conn.commit()
    finally:
        conn.close()

    flash('Booking confirmed!', 'success')
    return redirect(url_for('guide_dashboard'))


init_db()

if __name__ == "__main__":
    app.run(debug=True)

