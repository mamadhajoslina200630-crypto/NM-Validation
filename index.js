const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  console.log('POST received:', req.body); // DEBUG
  
  const { email, password } = req.body;
  
  // EXACT MATCH REQUIRED
  if (email === 'admin@demo.com' && password === 'password123') {
    console.log('LOGIN SUCCESS!');
    res.json({ success: true, token: 'success-token-123' });
  } else {
    console.log('LOGIN FAILED:', email, password);
    res.status(401).json({ error: 'Wrong email or password' });
  }
});

app.listen(5000, () => {
  console.log('🚀 Server ON: http://localhost:5000');
});
