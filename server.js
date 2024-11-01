import http from "http"

// Create a server

http.createServer( function (request, response) {  

      // Send the response body 
      response.end('<h1>Hello Node!!!!</h1>');

   }).listen(3000);

// Console will print the message

console.log('Server running at http://127.0.0.1:3000/');
