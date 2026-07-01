const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());

// Static uploads
app.use('/uploads', express.static(path.join(__dirname, process.env.UPLOAD_DIR || 'uploads')));

// basic route
app.get('/', (req, res) => res.send('Job Portal API'));

// Mount routes (to be implemented)
// const authRoutes = require('./src/routes/auth');
// const jobRoutes = require('./src/routes/jobs');
// app.use('/api/auth', authRoutes);
// app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/job_portal';

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch(err => console.error(err));
