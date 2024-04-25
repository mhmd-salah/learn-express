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


//--------ARTICLES_ENDPOINT---------
serv.post( "/articles", async( req, res ) =>
{
  const newArticle = new Article()
  const artTitle = req.body.title
  const artBody = req.body.body
  const artLiks = req.body.liks

  //---------------------------
  newArticle.title = artTitle
  newArticle.body = artBody
  newArticle.numberOfLiks = artLiks;
  await newArticle.save()
  res.send("done add new article")
})




serv.listen( 3000, () =>
{
  console.log("listent on port : 3000")
})