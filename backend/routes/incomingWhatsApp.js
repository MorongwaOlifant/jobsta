// routes/incomingWhatsApp.js
const express = require('express');
const router = express.Router();

router.post('/webhook', (req, res) => {
  const incomingMsg = req.body.Body;
  const from = req.body.From;

  console.log('📩 Received message:', incomingMsg, 'from:', from);

  // Example auto-reply
  if (incomingMsg.toLowerCase() === 'hi') {
    res.set('Content-Type', 'text/plain');
    res.send('👋 Hello! Welcome to Jobsta. Reply "start" to register.');
  } else {
    res.set('Content-Type', 'text/plain');
    res.send('❓ I didn’t understand that. Please reply "start" to begin.');
  }
});

module.exports = router;