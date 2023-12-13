require('dotenv').config();
const bodyParser = require('body-parser'); // Import body-parser
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const entryRoutes = require('./routes/entry');

const app = express();

app.use(cors({origin: ["http://localhost:3000","https://yelpcamps-client.vercel.app"],methods: ["POST", "GET", "PUT", "DELETE"] ,credentials: true}))
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/entries', entryRoutes);

// Connect to the database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to the database & Listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.error(error);
  });
