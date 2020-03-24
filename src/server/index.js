const app = require("./app");
// // var path = require('path')
var aylien = require("aylien_textapi");
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


// set aylien API credentias
  var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });
// -------------------------------------------------------------------

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


console.log(__dirname);


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.post('/apitest',(req,res)=>{
    textapi.sentiment({
       'url':req.body.text,
        mode:'document'
      },
       function(error, response) {
        if(error){
          console.log("'error please enter valid text'");
        }else{
          console.log(response);
          res.send(response);
        }
      })
})