# Jobsta - WhatsApp Job Alerts

A simple WhatsApp-based job alert system built for portfolio demo. Jobseekers chat with a bot to share their profile, and get personalized job alerts sent back via WhatsApp.

## Features

**WhatsApp Bot Conversation**: Users answer 9 questions to build their job profile
**MongoDB Storage**: All user data saved securely in database
**Job Alerts**: Send personalized job matches via WhatsApp (manual or automated)
**Web Form Backup**: Alternative signup via website form
**Twilio Integration**: Reliable WhatsApp messaging through Twilio API

## Tech Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, Tailwind CSS
- **Messaging**: Twilio WhatsApp API
- **Deployment**: Local development (ready for production)

## How to Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/MorongwaOlifant/jobsta.git
   cd jobsta
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your Twilio credentials and MongoDB URI
   npm start
   ```

3. **Setup Frontend** (in new terminal)
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Test the Bot**
   - Visit http://localhost:3000
   - Click "Start on WhatsApp"
   - Send "Hi" to begin the 9-question flow
   - Data saves to MongoDB automatically

## Project Structure

```
jobsta/
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── services/        # WhatsApp bot logic
│   ├── utils/           # Helpers (email, WhatsApp send)
│   └── server.js        # Main server file
├── frontend/
│   ├── src/components/  # React components
│   └── public/          # Static assets
└── README.md
```

## How Job Alerts Work

1. User completes WhatsApp screening (9 questions)
2. Profile saved to MongoDB with WhatsApp number
3. Admin can query database for matches
4. Send alerts via Twilio API to user's WhatsApp number
5. Example: "New IT job in Cape Town: Software Developer at XYZ Corp"

## Environment Variables

Create `backend/.env` with:

```env
MONGO_URI=your-mongodb-connection-string
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-token
TWILIO_PHONE_NUMBER=whatsapp:+1234567890
PORT=5050
```

## Acknowledgements

- Twilio for WhatsApp API
- MongoDB Atlas for database
- React & Express communities

## License

MIT License - feel free to use for learning!
