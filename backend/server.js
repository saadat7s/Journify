require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const entryRoutes = require('./routes/entry');
const registrationRoutes = require('./routes/registrationRoute'); 
const authRoutes = require('./routes/auth')



const app = express();

app.use(cors({
  origin: ["http://localhost:3000", "https://yelpcamps-client.vercel.app"],
  methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Handle OPTIONS requests
app.options('/api/register', cors());
app.options('/api/entries/:id', cors());
app.options('/api/entries', cors());
app.options('/api/auth', cors());



// Connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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
