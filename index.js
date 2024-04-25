const express = require( "express" );
const serv = express();
serv.use( express.json() )

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
  res.render("numbers.ejs")
} );




serv.listen( 3000, () =>
{
  console.log("listent on port : 3000")
})