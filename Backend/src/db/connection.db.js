// src/db/connection.db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_URL = process.env.DB_URL;

if (!DB_URL) {
  console.error('❌ DB_URL is not defined in .env');
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(' Successfully connected to the database');
  } catch (error) {
    console.error(' Error connecting to the database:', error.message);
    process.exit(1); // Stop the app if DB connection fails
  }
};

// Call the connection function
connectDB();

export default mongoose;
