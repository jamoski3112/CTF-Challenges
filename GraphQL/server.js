const express = require('express');
const expressGraphQL = require("express-graphql");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const serveIndex = require('serve-index');
const{
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLNonNull
} = require('graphql');
const app = express()
const port = 3000
dotenv.config();
//DB connection
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('Connection to DB has been successful'));

    //Routes
const authRoute = require('./routes/auth');

//Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads'), serveIndex('uploads', {'icons': true}));

//Route Middleware
app.use('/api/user',authRoute);

const userModel = mongoose.model("users",{
    name:String,
    password:String,
    plainpassword:String
});
const postModel = mongoose.model("posts",{
    author:String,
    post:String
});
const postType=new GraphQLObjectType({
    name:"posts",
    fields:{
        author:{type: GraphQLString},
        post:{type: GraphQLString}

    }
});

const userType = new GraphQLObjectType({
    name:"users",
    fields:{
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        password:{type: GraphQLString},
        plainpassword:{type:GraphQLString}
    }
});
const permission="Permission Denied"
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields:{
            users:{
                type: GraphQLList(userType),
                resolve:(root,args,context,info) =>{
                // return userModel.find().exec();
                return(null);
                }
            },
           user:{
               type:userType,
               args:{
                   name:{type:GraphQLNonNull(GraphQLString)}
               },
               resolve:(root,args,context,info) =>{
                   return userModel.findOne(args).exec();
               }
           },
           posts:{
               type:GraphQLList(postType),
               resolve:(root,args,context,info) =>{
                   return postModel.find().exec();
               }
           },
           post:{
               type:postType,
               args:{
                   author:{type:GraphQLNonNull(GraphQLString)}
               },
               resolve:(root,args,context,info) =>{
                   return postModel.findOne(args).exec();
               }
           } 
        }
    })
})
app.use("/graphql",expressGraphQL({
    schema:schema,
    graphiql:false
}));
app.listen(port, 
    () => console.log('Simple Express app listening on port ',port))