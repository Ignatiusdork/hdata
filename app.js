const express = require('express');

const app = express();

const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json({
    slackUsername: 'littignatius',
    backend: true,
    age: 27,
    bio: 'I am a backend dev interning at HNG, looking forward to make the best out of this internship.',

  });
});

module.exports = app;