const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/api',(req,res)=>{
	
	res.json({
		message:'Welcome to Internal API please authenticate with this Guest Token',
		authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6Imd1ZXN0Iiwicm9sZSI6Im5vbmUifSwiaWF0IjoxNTUyMzg1MzY1fQ.13H2SVdtw_ZbTEsn9qzsKOe-R0a4trNJAtbii8X_lEw'
	});
});
app.get('/api/dashboard',(req,res)=>{
	
	res.json({
		message:'Only POST method can be used'
	});
});
app.post('/api/dashboard',verifyToken,(req,res)=>{
	jwt.verify(req.token,'spongebob',(err,authData)=>{
		if(err){
			res.json({
				message:'Something is not right seems the token is manipulated'
			});

		}
		else{
                     if(authData.user.role=='admin'){
			// Show this only if JWT is from Admin
			res.json({
				message:'Welcome to the most secure area Here is the Flag dc04710x03{Jwt_W@S_lit_BU7_tH3_KeY_10l}',
				
			});
		     }
		     else{
		        res.json({
				message:'There is Nothing for you to see here ',
			});
		     }
		}
	});
});
app.get('/api/login',(req,res)=>{
	res.json({
		message:'Please Login With the Credentials'
	});
});
app.post('/api/login',(req,res)=>{
	//Test Admin Data
	//Create another User as mock
	const user={
		id:2,
		username:'user',
                role:'user'
	}
	jwt.sign({user},'spongebob',(err,auth)=>{
		res.json({
			auth
		});
});
});

function verifyToken(req,res,next){
	const bearerHeader=req.headers['authorization'];
	//CHECK if bearer undefined
	if(typeof bearerHeader !== 'undefined'){
		const bearer =bearerHeader.split(' ');
		const bearerToken = bearer[1];
		req.token = bearerToken;
		next();

	}else{
		res.json({
		message:'Auth Token is missing'
	});
	}
}
app.listen(8080,()=>console.log("Server has started"));
