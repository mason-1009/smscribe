const express = require('express');

// Setup app
const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send({message: 'testing, testing, 1.. 2.. 3...'});
});

app.post('/webhooks/sms', (req, res) => {
  console.log(`Received ${req.body}`)
  res.send({})
});

app.listen(port, (err) => {
  console.log(`Listening for connections on PORT ${port}`)
});
