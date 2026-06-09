import express from 'express';
const app = express();
const PORT = 5001;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));