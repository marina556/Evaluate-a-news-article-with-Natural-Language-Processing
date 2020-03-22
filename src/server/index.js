var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
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

const app = express()
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.post('/test',(req,res)=>{
    textapi.sentiment({
      url:req.body.url,
        mode:'document'
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response)
        }
      });
})