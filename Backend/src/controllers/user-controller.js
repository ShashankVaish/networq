import e from "express";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import User from '../models/User.models.js'
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";



// make a signup controller
const signup = async (req, res) => {
  try {
    const { username, email, password, firstname, lastname } = req.body;

    if (!username || !email || !password) {
      throw new ApiError('All fields are required', 400);
    }

    if (password.length < 6) {
      throw new ApiError('Password must be at least 6 characters', 400);
    }

    if (!email.includes('@')) {
      throw new ApiError('Invalid email address', 400);
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      throw new ApiError('Email or username already exists', 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    return res
      .status(201)
      .json(new ApiResponse(201, user, 'User created successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
        error: {
          message: error.message,
          statusCode: error.statusCode,
        },
        data: {},
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: {
        message: error.message,
        statusCode: 500,
      },
      data: {},
    });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic input validation
    if (!email || !password) {
      throw new ApiError("Please provide both email and password", 400);
    }

    // Look up the user by email
    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError("User not found. Please sign up first.", 404);
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new ApiError("Incorrect password", 401);
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send back a clean response
    return res.status(200).json(
      new ApiResponse(200, {
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
        },
      }, "Logged in successfully")
    );
  } catch (error) {
    // Custom error handling
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
        error: {
          message: error.message,
          statusCode: error.statusCode,
        },
        data: {},
      });
    }

    // Fallback for unexpected errors
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: {
        message: error.message,
        statusCode: 500,
      },
      data: {},
    });
  }
};
export { signup,login };