const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Add the matchPassword method to the schema
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Create the User model
const User = mongoose.model('User', userSchema);

// Example usage
const loginUser = async (email, password) => {
    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            console.log('User not found.');
            return;
        }

        // Use the matchPassword method
        const isMatch = await user.matchPassword(password);

        if (isMatch) {
            console.log('Password matched!');
        } else {
            console.log('Invalid password.');
        }
    } catch (error) {
        console.error('Error during login:', error.message);
    }
};

// Example call to loginUser
(async () => {
    const email = 'test@example.com';
    const password = 'password123';
    await loginUser(email, password);
})();