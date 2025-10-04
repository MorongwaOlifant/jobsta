// services/twilioClient.js
require('dotenv').config();
const twilio = require('twilio');

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendWhatsApp = async (to, message) => {
  try {
    const result = await client.messages.create({
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
      to: `whatsapp:${to}`,
      body: message,
    });
    console.log('Message sent:', result.sid);
  } catch (err) {
    console.error('Failed to send WhatsApp:', err);
  }
};

module.exports = { sendWhatsApp };