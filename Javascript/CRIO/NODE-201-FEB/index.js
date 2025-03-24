const express = require("express");
const {
  getCurrencies,
  getCurrencyBySymbol,
} = require("./controllers/currencies.controller");
const {
    getUserById,
    getUsersByGenderAndAge,
} = require("./Controllers/users.controller");

const app = express();
const PORT = 8082;

app.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

app.get("/currencies", getCurrencies);

app.get("/currencies/:symbol", getCurrencyBySymbol);


// app.get("/posts/:postId/comments/:commentId", (req, res) => {
    //   console.log(req.params);
    //   res.send(currenciesJson);
    // });
app.get("/users",getUsers);
    
app.get("/users/:uuid",getUserById);

app.listen(PORT, () => {
console.log(`listening on port: ${PORT}`);
});

// const http = require("http");
// const PORT = 8082;

// const server = http.createServer((req,res) => {
//     let endpoint = req.url;
//     switch(endpoint){
        
//     }
//     if(req.url === "/" && req.method === "GET"){
//         res.writeHead(200,{"content-type": "text/html"});
//         res.end("<h1>Currency Database</h1>");
//     }
// })

// server.listen(PORT, ()=> {
//     console.log(`Listening on PORT: ${PORT}`);
// })


// const http = require("http");
// const PORT = 8082;

// const server = http.createServer((req, res) => {
//   if (req.url === "/" && req.method === "GET") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.end("<h1>Hello from Server</h1>");
//   } else if (req.url === "/info" && req.method === "GET") {
//     const serverInfo = {
//       serverName: "Crio Server",
//       version: "1.0.0",
//       currentDate: new Date().toDateString(),
//       currentTime: new Date().toTimeString(),
//     };
//     res.writeHead(200, { "content-type": "application/json" });
//     res.end(JSON.stringify(serverInfo));
//   } else {
//     res.writeHead(404, { "content-type": "application/json" });
//     res.end(
//       JSON.stringify({
//         message: "Route does not exist!",
//       })
//     );
//   }
// });

// server.listen(PORT, () => {
//   console.log(`listening on port: ${PORT}`);
// });