var http = require("http");

//Using the previous example as a guide, create an app that has two web servers.
//One that listens on port 7000 and one that listens on port 7500.
var PORT1 = 7000;
var PORT2 = 7500;

// The one listening on port 7000 will always tell the user something good about themselves.

function handleGoodRequest(req, resp){
    resp.end("You are AWESOME! " + req.url);
};

var goodServer = http.createServer(handleGoodRequest);

goodServer.listen(PORT1, function(){
    console.log("listening on: http://localhost:" + PORT1);

});


//The one listening on 7500 will always tell the user something bad about themselves.

function handleBadRequest(req, resp){
    resp.end("You are SUCK! " + req.url);
};

var badServer = http.createServer(handleBadRequest);

badServer.listen(PORT2, function(){
    console.log("listening on: http://localhost:" + PORT2);

});





// Bonus

// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet

