const express = require('express');
const { pgPool } = require('./src/db.js');

// Setup app
const port = process.env.PORT || 3000;
const app = express();

// Create separate routers for Twilio and JSON-enabled APIs
const apiRouter = express.Router();
const twilioRouter = express.Router();

apiRouter.use(express.json());
twilioRouter.use(express.urlencoded());

apiRouter.get('/', (req, res) => {
  res.send({message: 'testing, testing, 1.. 2.. 3...'});
});

twilioRouter.post('/sms', async (req, res) => {
  console.log(`Received ${JSON.stringify(req.body)}`)

  // Insert into the DB
  const now = new Date();
  await pgPool.query(
    `INSERT INTO TextMessages(received_at, from_number, to_number, body)
      VALUES($1, $2, $3, $4) RETURNING *`,
    [now, req.body.From, req.body.To, req.body.Body]);

  res.send({})
});

// Attach routers to application
app.use('/api', apiRouter);
app.use('/twilio', twilioRouter);

app.listen(port, (err) => {
  console.log(`Listening for connections on PORT ${port}`)
});
