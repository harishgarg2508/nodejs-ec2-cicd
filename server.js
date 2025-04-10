const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Data is live go to /users to view the data!');
});

app.get('/users', (req, res) => {
  fs.readFile('./users.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file');
    const users = JSON.parse(data);
    res.json(users);
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
