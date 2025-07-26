const express = require('express');
const dotenv = require('dotenv'); // Load env variables
const cors = require('cors');

const connectDB = require('./config/db');
const feedbackRoutes = require('./routes/feedbackRoutes');
const logger = require('./middleware/logger');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(logger);         // Custom request logger
app.use(express.json()); // Built-in JSON body parser

// Routes
app.use('/api/feedback', feedbackRoutes);

// Start server using PORT from .env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
