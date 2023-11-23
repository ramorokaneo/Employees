const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
  // Handle registration logic here
  // You can access form data using req.body
  console.log('Registration Data:', req.body);

  // Assuming registration is successful
  res.status(200).json({ message: 'Registration successful' });
});

app.post('/api/login', (req, res) => {
  // Handle login logic here
  // You can access form data using req.body
  console.log('Login Data:', req.body);

  // Assuming login is successful
  res.status(200).json({ message: 'Login successful' });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
