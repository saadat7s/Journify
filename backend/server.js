require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const entryRoutes = require('./routes/entry');
const registrationRoutes = require('./routes/registrationRoute'); 
const authRoutes = require('./routes/auth');
const session = require('express-session');
const MongoStore = require('connect-mongo');




const app = express();

app.use(cors({
  origin: ["http://localhost:3000", "https://yelpcamps-client.vercel.app"],
  methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Use express-session middleware
const sessionOptions = {
  secret: 'your-secret-key', // Change this to a secret key
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongoUrl: process.env.MONGO_URI, // Change this to your MongoDB connection string
    touchAfter: 24 * 3600, // time period in seconds
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
};

app.use(session(sessionOptions));

app.use((req, res, next) => {
  // Check if the request is authenticated
  if (req.session && req.session.user) {
    // User is authenticated
    next();
  } else {
    // User is not authenticated; handle accordingly (e.g., send a 401 Unauthorized response)
    res.status(401).json({ error: 'Unauthorized' });
  }
});


// Handle OPTIONS requests
app.options('/api/register', cors());
app.options('/api/entries/:id', cors());
app.options('/api/entries', cors());
app.options('/api/auth', cors());



// Connect to the database
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');

    // Routes for each operation
    app.use('/api/register', registrationRoutes);
    app.use('/api/entries', entryRoutes);
    app.use('/api/auth', authRoutes);

    // Start the server
    app.listen(process.env.PORT, () => {
      console.log('Listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });