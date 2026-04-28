# Halton Marine – Shared Hosting Deployment Guide

> **Target**: cPanel shared hosting at `https://haltonmarinedredging.com`  
> **Stack**: Laravel 12 + Inertia.js + React (Vite)

---

## What You Need To Do Locally First

These steps run on **your own computer** before uploading anything.

### Step 1 – Build the Frontend

```bash
npm ci
npm run build
```

This compiles all React/CSS into `public/build/`. ✅ **Already done.**

### Step 2 – Install PHP Dependencies

```bash
composer install --no-dev --optimize-autoloader
```

This fills the `vendor/` folder with production-only packages. Run this from
the project root. The `vendor/` folder will be uploaded to the server.

### Step 3 – Create the Deployment Zip

Zip the **entire project folder** (everything in `HaltonMarine/`).  
**Exclude** these folders to keep the zip small:

| Exclude | Why |
|---|---|
| `node_modules/` | Not needed on server — only `public/build/` matters |
| `.git/` | Version control history not needed |

Everything else — including `vendor/`, `public/build/`, `storage/app/public/` — must be included.

> 📦 A ready-made zip can be created by running the **PowerShell command** at the bottom of this guide.

---

## Server Steps (cPanel)

### Step 4 – Create a MySQL Database

1. Log into **cPanel** → **MySQL Databases**
2. Create a new database: e.g. `halton_marine`
3. Create a new user with a strong password
4. Add the user to the database with **All Privileges**
5. Note the database name, username, and password

### Step 5 – Upload the Project

1. In cPanel → **File Manager**, navigate to `public_html/`
2. Delete any existing default files (`index.php`, `cgi-bin/`, etc.)
3. Upload your zip file to `public_html/`
4. Right-click the zip → **Extract** → extract into `public_html/`

Your `public_html/` structure should now look like:

```
public_html/
├── .htaccess          ← root redirect (already configured)
├── app/
├── bootstrap/
├── config/
├── database/
├── public/            ← Laravel's web root
│   ├── .htaccess
│   ├── build/
│   ├── index.php
│   └── deploy-helper.php
├── resources/
├── routes/
├── storage/
├── vendor/
└── ...
```

The root `.htaccess` automatically redirects all web traffic into the `public/` subfolder — so your domain resolves correctly without changing any cPanel settings.

### Step 6 – Configure the `.env` File

1. In File Manager, find `public_html/.env.example`
2. Right-click → **Copy** → rename the copy to `.env`
3. Right-click `.env` → **Edit** → fill in these values:

```dotenv
APP_NAME="Halton Marine"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://haltonmarinedredging.com

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=your_cpanel_db_name
DB_USERNAME=your_cpanel_db_user
DB_PASSWORD=your_db_password

ADMIN_PASSWORD=YourStr0ngP@ssword123
```

> **Important**: On most cPanel hosts `DB_HOST=localhost` is correct.  
> The DB name and username will be prefixed by your cPanel account name, e.g. `cpanelusername_halton_marine`.

### Step 7 – Set Up PHP Version

In cPanel → **MultiPHP Manager** (or **Select PHP Version**):

- Set PHP to **8.2** or **8.3**
- Ensure these extensions are enabled: `pdo_mysql`, `mbstring`, `openssl`, `fileinfo`, `tokenizer`, `xml`, `ctype`, `json`, `bcmath`, `intl`, `zip`

### Step 8 – Run Setup Commands via Deploy Helper

Since shared hosting has no SSH, use the included helper script.

1. Open `public_html/public/deploy-helper.php` in File Manager → **Edit**
2. Change `CHANGE_THIS_TO_A_RANDOM_STRING` to any secret, e.g. `halton2026launch`
3. Save the file
4. In your browser, visit:
   ```
   https://haltonmarinedredging.com/deploy-helper.php?secret=halton2026launch
   ```
5. You should see green checkmarks for each command:
   - ✓ `migrate` — creates all database tables
   - ✓ `storage:link` — links uploaded media files to be web-accessible
   - ✓ `config:cache` — caches configuration for performance
   - ✓ `route:cache` — caches routes
   - ✓ `view:cache` — caches Blade views

6. **⚠️ Immediately delete `public_html/public/deploy-helper.php`** after running it!

### Step 9 – Seed the Database (Initial Data)

The deploy helper only runs migrations. To seed initial content (services, projects, banners, admin user), you need to call the seeder. There are two options:

**Option A – If your host provides SSH access:**
```bash
php artisan db:seed
```

**Option B – If no SSH (add a temporary route):**

1. Open `routes/web.php` and temporarily add at the top:

```php
Route::get('/run-seeder-DELETEME', function () {
    if (app()->environment('production')) {
        Artisan::call('db:seed', ['--force' => true]);
        return 'Seeded! Delete this route now.';
    }
    return 'Not in production.';
});
```

2. Visit `https://haltonmarinedredging.com/run-seeder-DELETEME`
3. **Remove the route immediately after** and re-upload `routes/web.php`

### Step 10 – Set File & Folder Permissions

In cPanel → **File Manager**, navigate to `public_html/`:

| Path | Permission |
|---|---|
| `storage/` (recursive) | `755` |
| `bootstrap/cache/` | `755` |

Right-click each folder → **Change Permissions**.

### Step 11 – Enable HTTPS (SSL)

1. In cPanel → **SSL/TLS** → **Let's Encrypt SSL** (or your host's SSL manager)
2. Issue a certificate for `haltonmarinedredging.com` and `www.haltonmarinedredging.com`
3. Enable **Force HTTPS Redirect** if available

### Step 12 – Verify the Deployment

- [ ] Visit `https://haltonmarinedredging.com` — homepage loads
- [ ] Images (banners, logos) display correctly (served from `/storage/…`)
- [ ] Navigate to all main pages: About, Services, Projects, Equipment, Contact
- [ ] Visit `https://haltonmarinedredging.com/login` → log in with `admin@haltonmarine.com` + your `ADMIN_PASSWORD`
- [ ] Admin dashboard loads and all sections are manageable
- [ ] Visiting a non-existent URL shows a 404, **not** a Laravel error trace

---

## Updating the Site (Re-deploying)

When you push code changes:

1. Build locally: `npm run build`
2. Upload only the changed files (or re-upload the full zip)
3. **Do not** re-run `db:seed` — this would duplicate data
4. Re-run the deploy helper to re-cache config/routes/views:
   ```
   https://haltonmarinedredging.com/deploy-helper.php?secret=YOUR_SECRET
   ```
   
5. Delete `deploy-helper.php` again

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| White screen / 500 error | Check `storage/logs/laravel.log` in File Manager; usually bad `.env` or wrong DB credentials |
| Images not loading | Re-run deploy helper (storage:link step), check `public/storage` symlink exists |
| CSS / JS not loading | Ensure `public/build/` folder was uploaded; re-run `npm run build` locally and re-upload |
| "Page not found" on refresh | Ensure `AllowOverride All` is set; contact host to enable `mod_rewrite` |
| Login redirects incorrectly | Check `APP_URL` in `.env` — must be `https://haltonmarinedredging.com` (no trailing slash) |
| Session errors | Check `SESSION_DRIVER=database` and that migrations ran (sessions table exists) |

---

## PowerShell – Create Deployment Zip Locally

Run this from the **parent folder** of the project to create a clean deployment zip:

```powershell
$source = "C:\Users\USER\Work\HaltonMarine"
$dest   = "C:\Users\USER\Work\HaltonMarine-deploy.zip"

# Remove old zip
if (Test-Path $dest) { Remove-Item $dest }

# Compress excluding node_modules and .git
Get-ChildItem $source -Recurse |
  Where-Object {
    $_.FullName -notmatch '\\node_modules\\' -and
    $_.FullName -notmatch '\\.git\\'
  } |
  Compress-Archive -DestinationPath $dest -Update

Write-Host "✅ Zip created at $dest"
```
