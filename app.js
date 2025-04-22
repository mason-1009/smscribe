const express = require('express');

// Setup app
const port = process.env.PORT || 3000;
const app = express();

// Create separate routers for Twilio and JSON-enabled APIs
const apiRouter = express.Router();
const twilioRouter = express.Router();

apiRouter.use(express.json());

apiRouter.get('/', (req, res) => {
  res.send({message: 'testing, testing, 1.. 2.. 3...'});
});

twilioRouter.post('/sms', (req, res) => {
  console.log(`Received ${req.body}`)
  res.send({})
});

// Attach routers to application
app.use('/api', apiRouter);
app.use('/twilio', twilioRouter);

app.listen(port, (err) => {
  console.log(`Listening for connections on PORT ${port}`)
});
