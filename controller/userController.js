const User = require('../models/userModel');

//login user
const loginUser = async (req, res) => {
    res.json({ mssg: 'login User' });
}

const signupUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.signup(email, password);
        res.json({ email, user });
    } catch(error) {
        res.json({ error: error.message })
    }
}

module.exports = { loginUser, signupUser };