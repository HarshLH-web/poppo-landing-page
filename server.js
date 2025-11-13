const express = require('express');
const path = require('path');
const app = express();


// Serve static files (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/host-registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'host', 'host.html'));
});
app.get('/agency-registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'agency', 'agency.html'));
});
app.get('/become-poppo-coin-seller', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'coiseller', 'coinseller.html'));
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});