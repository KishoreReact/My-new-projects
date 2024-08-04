const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const { addStaff, getAllStaff } = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/staff', async (req, res) => {
  try {
    const staff = await addStaff(req.body);
    res.status(201).json(staff);
  } catch (err) {
    console.error('Database error:', err.message);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

app.get('/api/staff', async (req, res) => {
  try {
    const staff = await getAllStaff();
    res.status(200).json(staff);
  } catch (err) {
    console.error('Database error:', err.message);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
