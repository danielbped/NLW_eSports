import express from 'express';

const app = express();

const PORT = 3000;

app.get('/ads', (req, res) => {
  return res.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' },
    { id: 4, name: 'Anúncio 4' }
  ])
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))