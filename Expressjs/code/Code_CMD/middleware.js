const express = require('express');
const app = express();

// Middleware function to log request details
app.use((req, res, next) => {
  console.log(`log request details phase : [${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware function for authentication
app.use((req, res, next) => {
  // Check authentication
  // If authenticated, call next()
  // Otherwise, send a response indicating unauthorized access
  console.log('Middleware : authentication');
  next();
});

// Route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route handler for the '/about' path
app.get('/items', (req, res) => {
  res.send('Items');
});

// Middleware for handling 404 errors
app.use((req, res, next) => {
    // Create a new Error object with a 404 status code
    const err = new Error('Not Found');
    err.status = 404; // Managing errors manually by developers themselves.
  
    // Pass the error to the next middleware
    next(err);
  });
  
  // Error-handling middleware for 404 errors
  app.use((err, req, res, next) => {
    // Check if the error status is 404
    if (err.status === 404) {
      res.status(404).send('404 - Not Found');
    } else {
      // Pass the error to the default Express error handler
      next(err);
    }
  });
  
  // Default error-handling middleware
  app.use((err, req, res, next) => {
    // Handle other errors here
    console.error(err);
    res.status(500).send('Internal Server Error');
  });


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
