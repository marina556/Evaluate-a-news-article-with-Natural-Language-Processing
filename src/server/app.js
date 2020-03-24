const express = require("express");
const app = express();
app.use(express.static('./dist'));
const mockAPIResponse = require('./mockAPI.js')


// app.get("/", (req, res) => {
//   res.status(200).send("Hello World!");
// });
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
  });

  
  
module.exports = app;