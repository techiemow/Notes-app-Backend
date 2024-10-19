const express = require("express");
const bodyParser =  require("body-parser");
const app = express();
app.use(bodyParser.json())

app.get("/" , (req, res) => {
    res.send("Hello from the server!");
});

app.listen( 5000 , () => {
console.log("server is running at port 5000");

})
