const router = require('express').Router();
const User =require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {registerValidation,loginValidation}=require('../validation'); 
const flag ='Flag : d0237a3c271a7e220fcc01943ff8ed77'


router.post('/post', async (req,res) =>{
    const post = new User({
        author:req.body.author,
        post:req.body.post
    });
    try{
        const savedPost = await post.save();
        
        res.send(savedPost);
    }catch(err){
        res.status(400).send(err);
    }
});



router.post('/register',async (req,res) =>{

    //TEST Validation
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //Check Existing Data
    const emailExist = await User.findOne({email:req.body.email});
    const userExist= await User.findOne({name:req.body.name});
    if(userExist) return res.status(400).send('Username already exists');
    if(emailExist) return res.status(400).send('Email Already Exists');
    
    //Bcrypt Hash Passwords

    const salt = await bcrypt.genSalt(10);
    // console.log(req.body.password)
    const hashedPassword = await bcrypt.hash(req.body.password,salt);
    
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
    res.json('Register as new user');
});
//login
router.get('/login',(req,res) =>{
    res.json('Please Login with Email and password')
});
router.post('/login',async (req,res) =>{
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    // const user = await User.findOne({email:req.body.email});
    // if(!user) return res.status(400).send('Email doesnt exist')
    const user= await User.findOne({name:req.body.name});
    if(!user) return res.status(400).send('Username doesnt exists');
    //Password is correct
    const validPass = await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('Email or Password is Invalid')
    //Creating JWT Token
    const token = jwt.sign({name:user.name},process.env.JWT_TOKEN);
    res.header('auth-token',token).json(flag);
    res.send('Logged In');
});


module.exports=router;