// src/models/user.js
import mongoose from '../db/connection.db.js';

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  image: { type: String, default: 'default.jpg' }
});

const User = mongoose.model('User', userSchema);

export default User;
