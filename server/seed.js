const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const User = require('./models/User');

const seedDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');

    // Check if user already exists
    const existingUser = await User.findOne({ email: 'ella@gmail.com' });
    if (existingUser) {
      console.log('User with email ella@gmail.com already exists');
      process.exit(0);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash('123ella', 10);

    // Create the test user
    const newUser = new User({
      firstName: 'Ella',
      lastName: 'Admin',
      age: '25',
      gender: 'Female',
      contactNumber: '09xx-xxx-xxxx',
      email: 'ella@gmail.com',
      type: 'admin',
      username: 'ella',
      password: hashedPassword,
      address: '123 Design Studio, Creative City',
      isActive: true,
    });

    await newUser.save();
    console.log('✅ Seed user created successfully!');
    console.log('Email: ella@gmail.com');
    console.log('Password: 123ella');
    console.log('Type: admin');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
  }
};

seedDB();
