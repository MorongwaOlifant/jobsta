// routes/whatsapp.js
const express = require('express');
const router = express.Router();
const sendWhatsAppMessage = require('../utils/sendWhatsApp');
const { handleUserMessage } = require('../services/whatsappService');
const twilio = require('twilio');
const MessagingResponse = twilio.twiml.MessagingResponse;

// ✅ Send a WhatsApp message from your system to a user
router.post('/send', async (req, res) => {
  const { to, message } = req.body;
  console.log('WhatsApp send route hit with to:', to, 'message:', message);
  try {
    await sendWhatsAppMessage(to, message);
    res.status(200).json({ success: true, message: 'Message sent' });
  } catch (error) {
    console.error('Error in WhatsApp send route:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ✅ Receive an incoming WhatsApp message from Twilio webhook
router.post('/receive', async (req, res) => {
  // Twilio sends data as x-www-form-urlencoded, so make sure in server.js you have:
  // app.use(express.urlencoded({ extended: false }));

  console.log('Receive route hit with body:', req.body);

  const Body = req.body.Body ? req.body.Body.trim() : '';
  const From = req.body.From || '';

  try {
    // Pass the user’s phone number and message to your service
    const reply = await handleUserMessage(From, Body);

    console.log('Sending reply:', reply);

    // Send reply via Twilio API instead of webhook response
    const to = From.replace('whatsapp:', '');
    await sendWhatsAppMessage(to, reply);

    res.send('OK');
  } catch (err) {
    console.error('Error in receive route:', err);
    res.status(500).send('Internal Error');
  }
});

module.exports = router;