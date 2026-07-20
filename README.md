# Universal Logistics & International — Airway Bill / Invoice App

Multi-user web app for creating, saving, and printing **Airway Bills**, **Terms & Conditions**,
and **Invoices** (Gift / Commercial / Proforma / Sample). Each user registers their own account
and only sees their own shipments.

## Features

- **Two roles: Admin and Customer.** The first account ever created becomes the Admin
  automatically. After that, public registration is closed — the Admin creates a login for
  each customer from the **Manage Customers** page.
- **Admin** sees every shipment/booking from every customer in one dashboard, can update
  each one's status (Pending → Confirmed → Shipped / Cancelled), and can edit or print any
  shipment.
- **Customer** gets the full Airway Bill / Invoice form too — including HS Code search and
  invoice pricing — but only ever sees and manages their own shipments, never anyone else's.
  Once the Admin moves a shipment past "Pending" (e.g. Confirmed), the customer's copy locks
  automatically so it can't be changed after the fact.
- Multiple products per invoice, each with its own HS Code
- HS Code search powered by the Pakistan Customs Tariff 2017-18 (7,200+ codes), served from
  the backend so the page stays lightweight
- One-click Print view: Airway Bill + Terms & Conditions (page 1, repeated per copy) followed
  by the Invoice (final page)
- No external database server required — uses Node's built-in SQLite

## Requirements

- **Node.js 22.5 or newer** (the app uses Node's built-in `node:sqlite` module, so no native
  compilation or separate database server is needed)

Check your Node version with:
```bash
node -v
```
If it's older than 22.5, install a newer version from https://nodejs.org first.

## Setup

1. Unzip/copy this project folder onto your server or computer.
2. Open a terminal inside the project folder and install dependencies:
   ```bash
   npm install
   ```
3. Copy the example environment file and edit it:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and set `JWT_SECRET` to a long random string (this keeps login sessions secure).
   You can generate one with:
   ```bash
   node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open your browser to:
   ```
   http://localhost:3000
   ```
   You'll be redirected to the login page. Click "Register here" to create the first
   account — this becomes your **Admin** account. After that, registration is closed;
   go to **Manage Customers** (top nav after logging in as Admin) to create a login for
   each of your customers.

## Folder structure

```
airway-app/
├── server.js              # Main Express server
├── db.js                  # SQLite database setup (users + shipments tables)
├── package.json
├── .env.example
├── data/
│   ├── app.db              # Created automatically on first run (your data lives here)
│   └── hs_codes.json       # Pakistan Customs Tariff HS code dataset
├── middleware/
│   └── auth.js             # Login-session verification (requireAuth / requireAdmin)
├── routes/
│   ├── auth.js              # /api/auth/register, /login, /logout, /me
│   ├── shipments.js         # /api/shipments CRUD (role-aware: admin sees all, customer sees own)
│   ├── admin.js              # /api/admin/customers, /api/admin/shipments (Admin only)
│   └── hscodes.js           # /api/hscodes search
└── public/                 # All front-end pages (plain HTML/CSS/JS, no build step)
    ├── index.html
    ├── login.html
    ├── register.html          # Only works for the very first (Admin) account
    ├── dashboard.html         # Admin: every customer's shipments/bookings + status
    ├── customers.html         # Admin: add/remove customer logins
    ├── my-shipments.html      # Customer: their own shipments list
    ├── form.html              # Full Airway Bill / Invoice / HS Code editor (Admin + Customer)
    ├── print.html              # Print-ready view (opened in a new tab)
    ├── css/style.css
    └── js/templates.js        # Shared HTML templates for the Bill / T&C / Invoice
```

## Backing up your data

All shipment and user data lives in a single file: `data/app.db`. To back up, just copy that
file somewhere safe. To reset everything, stop the server and delete `data/app.db` — it will
be recreated empty the next time you run `npm start`.

## Deploying to a real server (so your team can access it from anywhere)

### ⚠️ Important: your data needs a persistent disk

This app stores everything (users + shipments) in one SQLite file. Most free hosting
platforms wipe their filesystem on every restart/redeploy — so unless the platform gives you a
**persistent volume/disk**, your data will disappear. Recommended platform: **Railway**, which
supports persistent volumes on its free trial.

### Option A — Railway.app (recommended for this app)

1. **Push this project to GitHub** (Railway deploys from a Git repo):
   ```bash
   cd airway-app
   git init
   git add .
   git commit -m "Initial commit"
   ```
   Create a new empty repository on https://github.com/new, then:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```
2. Go to https://railway.app and sign up (no credit card needed to start; you get $5 free
   trial credit for 30 days, then it's $5/month to keep it running continuously).
3. Click **New Project → Deploy from GitHub repo**, connect your GitHub account, and select
   the repository you just pushed.
4. Railway will detect Node.js automatically. Before the first deploy finishes, open the
   service's **Settings** tab:
   - Under **Variables**, add:
     - `JWT_SECRET` = a long random string (generate one with
       `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`)
     - `DB_PATH` = `/data/app.db`
   - Under **Volumes**, click **+ New Volume**, set the mount path to `/data`. This keeps
     your database safe across every future redeploy.
5. Click **Deploy**. Once it finishes, Railway gives you a live URL like
   `https://your-app.up.railway.app` — open it, register your first account, and you're live.
6. (Optional) Under **Settings → Networking**, add your own domain name and point its DNS
   (CNAME record) to the address Railway gives you.

### Option B — Render.com

Render's **free** web services don't keep a persistent disk, so your database would reset
whenever the service restarts. If you still want to use Render, upgrade to a paid instance
type and add a **Persistent Disk** (Render Dashboard → your service → Disks) mounted at, say,
`/data`, then set the `DB_PATH` environment variable to `/data/app.db` the same way as above.
Steps are otherwise identical: connect your GitHub repo, set Build Command to `npm install`
and Start Command to `npm start`, add your environment variables, and deploy.

### Option C — Your own VPS / cPanel server

Copy the project folder onto your server, run `npm install && npm start` (ideally under a
process manager like `pm2` so it restarts automatically), and put nginx or Apache in front of
it as a reverse proxy for your domain + HTTPS. Since it's your own disk, no extra
configuration is needed — `data/app.db` will simply persist normally.

Once deployed with any option above, share the URL with your team — each person registers
their own login and manages their own shipments.

## Notes

- Passwords are hashed with bcrypt before being stored — they are never saved in plain text.
- Login sessions are stored in an httpOnly cookie, which is safer than storing tokens in
  browser storage.
- If you deploy behind HTTPS (recommended), uncomment the `secure: true` line in
  `routes/auth.js` so cookies are only sent over encrypted connections.
