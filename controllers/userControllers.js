const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports.createUser = async function(req, res){
    try {
        
        // first check if the user is already exist or not
    let user = await User.findOne({email: req.body.email});

    if(user){
        return res.status(200).json({
            message: 'User already exist'
        });
        // if not
    } else {
        // then create a new user
        let newUser = await User.create(req.body);
        return res.status(200).json({
            message: 'User signed up successfully!!!',
            user: newUser
        });
    }

    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error
        });
    }
}


module.exports.createSession = async function(req, res){
    
    try {
        
        // first find if user exist or not
    let user = await User.findOne({email: req.body.email});

    // if user not found or password doesn't match
    if(!user || user.password != req.body.password){
        return res.status(401).json({
            message: 'Invalid username or password'
        });
    }

    // if password matches then...
    return res.status(200).json({
        messages: 'User session is created !!! and the jwt token is created',
        token: {
            data: jwt.sign(user.toJSON(), process.env.JWTSECRETKEY, {expiresIn: '1h'})
        }
    });

    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error
        });
    }

}