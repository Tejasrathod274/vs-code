# India Tour – Flask + MySQL Setup

## 1. Create MySQL database

In MySQL (or phpMyAdmin / MySQL Workbench), run:

```sql
CREATE DATABASE india_tour;
```

## 2. Install Python dependencies

```bash
cd "c:\College Project"
pip install -r requirements.txt
```

## 3. Configure MySQL (optional)

Create a file named `.env` in the project folder (copy from `.env.example`):

```
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=india_tour
SECRET_KEY=any-random-string-for-sessions
```

If you don’t create `.env`, the app uses defaults: user `root`, no password, database `india_tour`.

## 4. Run the app

```bash
python app.py
```

Open **http://127.0.0.1:5000** in your browser.

## Flow

- **Explore** on any destination → if not logged in, you are redirected to the **login** page, then back to that destination after login.
- **Login** is checked against the **MySQL `users` table** (created automatically on first run).
- **Demo login:** `demo@example.com` / `demo123` (created automatically if the table is empty).
- **Register** at `/register` to create a new account stored in MySQL.

## Connecting MySQL

The app uses **PyMySQL** and reads settings from `config.py` (which uses `.env`):

- `config.py` – defines `MYSQL_HOST`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DATABASE`.
- `app.py` – `get_db()` opens a connection; `init_db()` creates the `users` table; `user_login()` and `user_register()` run queries against it.

To use another database name or user, set the same variables in your `.env` file.

## Bookings and email

- **Book Tour** on any destination page opens a form. On submit, the booking is saved in the **`bookings`** table (created automatically on first run).
- To send a **confirmation email** to the user after booking, add these to your `.env` (e.g. Gmail):

```
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USE_TLS=true
MAIL_USERNAME=your@gmail.com
MAIL_PASSWORD=your_app_password
```

For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833), not your normal password. If `MAIL_USERNAME` is not set, bookings are still saved but no email is sent.
