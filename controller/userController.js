const User = require('../models/userModel');

//login user
const loginUser = async (req, res) => {
    res.json({mssg:'login User'});
}

const signupUser = async (req, res) => {
    res.json({mssg:'signup User'});
}

module.exports = {loginUser , signupUser};