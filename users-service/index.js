// basic express server
const express = require('express');
const app = express();
const port = 3000;

app.get('/get-users', (req, res) => {
  res.status(200).json({
    users: [
      { name: 'John Doe', age: 30 },
      { name: 'Jane Doe', age: 25 },
      { name: 'Jim Doe', age: 20 },
      { name: 'Jill Doe', age: 15 },
      { name: 'Jack Doe', age: 10 },
    ],
  });
});

app.listen(port, () => {
  console.log(`Users service listening at http://localhost:${port}`);
});
