const User = require('../models/userModel')
const catchAsync = require('../utils/catchAsync')


exports.login = (req, res) => {
    res.send('I am login')
}
exports.signup = catchAsync(async (req, res) => {
    //res.send('I am signUp')
    // console.log(req.body)
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    })

    res.status(201).json({
        status: 'sucess',
        //token,
        data: {
            user: newUser
        }
    })
})