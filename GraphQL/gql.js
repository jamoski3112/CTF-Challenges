const express = require('express');
const mongoose = require('mongoose');
const expressGraphQL = require("express-graphql");
const dotenv = require('dotenv');
const{
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLNonNull
} = require('graphql');

var app=express();
dotenv.config();
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('Connection to DB has been successful'));

const userModel = mongoose.model("users",{
    name:String,
    password:String
});
const userType = new GraphQLObjectType({
    name:"users",
    fields:{
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        password:{type: GraphQLString}
    },
    name:"posts",
    fields:{
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        post:{type:GraphQLString}

    }
});
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields:{
            user:{
                type: GraphQLList(userType),
                resolve:(root,args,context,info) =>{
                    return userModel.find().exec();
                }
            }
        }
    })
})
app.use("/graphql",expressGraphQL({
    schema:schema,
    graphiql:true
}));
app.listen(3000,() =>{
    console.log("Server on 3000");
});