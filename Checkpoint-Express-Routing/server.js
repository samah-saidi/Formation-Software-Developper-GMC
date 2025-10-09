// server.js

const express = require('express');
const path = require('path');
const workingHoursMiddleware = require('./middleware/workingHours');

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Apply the working hours middleware to all routes
app.use(workingHoursMiddleware);

// Routes
app.get('/', (req, res) => {
  res.render('home', { page: 'home' });
});

app.get('/services', (req, res) => {
  res.render('services', { page: 'services' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { page: 'contact' });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/">Go back to Home</a>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Available pages:');
  console.log('- Home: http://localhost:3000/');
  console.log('- Services: http://localhost:3000/services');
  console.log('- Contact: http://localhost:3000/contact');
});