// middleware/workingHours.js

const workingHoursMiddleware = (req, res, next) => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = now.getHours(); // 0-23

  // Check if it's a weekday (Monday = 1 to Friday = 5)
  const isWeekday = day >= 1 && day <= 5;
  
  // Check if it's between 9 and 17 (5 PM)
  const isWorkingHours = hour >= 9 && hour < 17;

  if (isWeekday && isWorkingHours) {
    // Allow access during working hours
    next();
  } else {
    // Deny access outside working hours
    res.status(403).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Outside Working Hours</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .container {
            text-align: center;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
          }
          h1 {
            font-size: 3em;
            margin: 0 0 20px 0;
          }
          p {
            font-size: 1.2em;
            margin: 10px 0;
          }
          .schedule {
            margin-top: 30px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🕐 Outside Working Hours</h1>
          <p>Sorry, this web application is only available during working hours.</p>
          <div class="schedule">
            <h2>Our Schedule</h2>
            <p><strong>Monday - Friday</strong></p>
            <p>9:00 AM - 5:00 PM</p>
          </div>
          <p style="margin-top: 30px; font-size: 0.9em;">Current time: ${now.toLocaleString()}</p>
        </div>
      </body>
      </html>
    `);
  }
};

module.exports = workingHoursMiddleware;