# Database Reset Guide

## Quick Start

### Option 1: Using Python Script (Easiest)
```bash
cd "C:\College Project"
python reset_db.py

# Or with options:
python reset_db.py drop      # Drop and recreate (default)
python reset_db.py truncate  # Keep structure, delete data
python reset_db.py drop test # Drop + insert test data
```

### Option 2: Using SQL File
```bash
mysql -u root -p travel_db < database-reset.sql
```

### Option 3: In MySQL Workbench/phpMyAdmin
1. Open `database-reset.sql`
2. Copy-paste the entire file
3. Execute

---

## When to Use Each Approach

### 🔄 DROP (Complete Reset)
**Use when:**
- Database structure is wrong or corrupted
- You need a completely clean slate
- Migrating to new schema
- Testing from scratch

**Pros:**
- Complete reset
- Auto-increment resets automatically
- No partial data left

**Cons:**
- Slower than TRUNCATE
- Takes longer to recreate tables
- More disk I/O

**Command:**
```python
reset_database(approach='drop')
```

### ✂️ TRUNCATE (Keep Structure)
**Use when:**
- Schema is correct
- Just need to clear data quickly
- Want to keep table structure and indexes
- Frequent resets during testing

**Pros:**
- Much faster than DELETE
- Keeps table structure and indexes
- Better disk space management
- Auto-increment still resets

**Cons:**
- Slightly more complex (need to handle foreign keys)
- Can't use WHERE clause
- Can't rollback in all databases

**Command:**
```python
reset_database(approach='truncate')
```

---

## Test Data Included

When you run with `test=True`, you get:

### Test User
- Email: `user@test.com`
- Password: `user123`
- Role: `user`
- Can book tours

### Test Guide
- Email: `guide@test.com`
- Password: `guide123`
- Role: `guide`
- Can see bookings in dashboard

### Sample Tour
- Title: Udaipur City Tour
- Price: ₹4,500/person
- Guide: Test Guide

---

## Database Schema

### users table
```
id, email, password_hash, full_name, phone, dob, gender, city, country, avatar, role, created_at
```

### tours table
```
id, guide_id, title, destination, description, price, created_at
```

### bookings table
```
id, user_id, tour_id, guide_id, name, email, phone, destination, tour_name, 
tour_price, preferred_date, persons, total_amount, message, status, created_at
```

### newsletter_subscribers table
```
id, email, created_at
```

---

## Verification After Reset

```sql
-- Check data counts (should all be 0 or have test data):
SELECT COUNT(*) FROM users;
SELECT COUNT(*) FROM tours;
SELECT COUNT(*) FROM bookings;

-- Check auto-increment resets:
SELECT AUTO_INCREMENT FROM INFORMATION_SCHEMA.TABLES 
WHERE TABLE_NAME = 'users' AND TABLE_SCHEMA = 'travel_db';

-- Show table structure:
DESCRIBE users;
DESCRIBE tours;
DESCRIBE bookings;

-- Check foreign keys:
SELECT CONSTRAINT_NAME, TABLE_NAME, COLUMN_NAME, REFERENCED_TABLE_NAME 
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE 
WHERE TABLE_SCHEMA = 'travel_db' AND REFERENCED_TABLE_NAME IS NOT NULL;
```

---

## Troubleshooting

### Error: "Cannot truncate table with foreign key constraint"
**Solution:** This is expected. The reset script handles it by disabling foreign keys first.

### Error: "Access denied for user"
**Solution:** Check your MySQL credentials in `config.py`

### Error: "Database doesn't exist"
**Solution:** Create it first:
```sql
CREATE DATABASE IF NOT EXISTS travel_db 
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Tables created but no data after reset
**Solution:** This is normal. Data was deleted. Use `insert_test_data=True` if you want sample data.

---

## Integration with Flask

### Add to your Flask app (optional):

```python
from reset_db import reset_database
from flask import Flask, request

app = Flask(__name__)

@app.route('/admin/reset-db', methods=['POST'])
def reset_db_endpoint():
    """Endpoint to reset database (protect with authentication!)"""
    if not is_admin(request):
        return "Unauthorized", 403
    
    approach = request.form.get('approach', 'drop')
    test_data = request.form.get('test_data') == 'true'
    
    try:
        reset_database(approach=approach, insert_test_data=test_data)
        return "Database reset successful", 200
    except Exception as e:
        return f"Error: {str(e)}", 500
```

**⚠️ WARNING:** Only use this in development! Never expose this endpoint in production!

---

## Tips & Best Practices

✅ **DO:**
- Always backup before reset (export data if needed)
- Test reset script in development first
- Use test data for consistent testing
- Run truncate during frequent development cycles
- Run drop when schema changes

❌ **DON'T:**
- Use reset commands in production without backups
- Expose reset endpoint publicly
- Forget to disable foreign keys before dropping
- Reset during active user sessions
- Mix DROP and TRUNCATE in same operation

---

## Need Help?

If database issues persist:

1. **Check credentials** in `config.py`
2. **Verify MySQL is running**
3. **Run TRUNCATE first** (safer than DROP)
4. **Check logs** for specific errors
5. **Recreate database** manually if needed

