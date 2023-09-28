// express server
const express = require('express');


// create express app
const app = express();
const PORT= process.env.PORT || 50120;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});