const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow frontend to access the backend
app.use(express.json()); // To parse JSON

// Sample route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
