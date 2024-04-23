const express = require( "express" );
const app = express();

app.get( "/hello", ( req, res ) =>
{
  res.send("hello")
} );
app.get( "/welcome", (req,res) =>
{
  res.send( "welcome" )
  console.log(req.headers)
} )
app.put( "/addcomment", ( req, res ) =>
{
  res.send("post request to add comment")
})
app.delete( "/delete", ( req, res ) =>
{
  res.send("delete function")
  console.log(req.headers)
})

app.listen( 3000, () =>
{
  console.log("listen on port : 3000")
})