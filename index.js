const express = require( "express" );
const serv = express();
serv.use( express.json() )
// mongodb+srv://msmhmdsalah:yVxF0Rv452zJnQw6@cluster0.jvyaeyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const mongoose = require( 'mongoose' );
const Article = require("./models/Articles")

mongoose.connect( "mongodb+srv://msmhmdsalah:yVxF0Rv452zJnQw6@cluster0.jvyaeyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ).then( () =>
{
  console.log("connected successully")
} ).catch( error =>
{
  console.log("error with conecting " + error)
})


serv.get( "/findsum/:num1/:num2", ( req, res ) =>
{
  const sum = parseInt(req.params.num1) + parseInt(req.params.num2)
  console.log(sum)
  res.send("find sum")
} );

serv.get( "/sayhello", ( req, res ) =>
{
  // console.log( req.body )
  // console.log(req.query.name)
  // res.sendfile(__dirname+"/src/numbers.ejs")
  res.render( "numbers.ejs", {
    name: "salah",
    
  })
} );




serv.listen( 3000, () =>
{
  console.log("listent on port : 3000")
})