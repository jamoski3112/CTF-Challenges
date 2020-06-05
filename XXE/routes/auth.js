const router = require('express').Router();
const User =require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/register',async (req,res) =>{
    const emailExist = await User.findOne({email:req.body.email});
    const userExist= await User.findOne({name:req.body.name});
    if(userExist) return res.status(400).send('Username already exists');
    if(emailExist) return res.status(400).send('Email Already Exists');
    console.log(req.body.password)
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    console.log(hashedPassword)

    //New User
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword,
        plainpassword:req.body.password
        //password:req.body.password
    });
try{
    const savedUser = await user.save();

    res.send(savedUser);
}catch(err){
    res.status(400).send(err);
}
});
router.get('/register',(req,res) =>{
    res.status(200).json('Register as new user');
});
//login
router.get('/login',(req,res) =>{
    res.json('Please Login with Email and password')
});
router.post('/login',async (req,res) =>{
    const user= await User.findOne({name:req.body.name});
    if(!user) return res.status(400).send('Username doesnt exists');
    const validPass = await bcrypt.compare(req.body.password,user.password);
    console.log(validPass);
    if(!validPass) return res.status(400).send('Email or Password is Invalid')
    const token = jwt.sign({name:user.name},process.env.JWT_TOKEN);
    res.header('auth-token',token).json('Hello '+user.name)

});


module.exports=router;
