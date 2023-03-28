import express from "express";

const server = express();
console.log("server running 8080");
const port = process.env.PORT || 8080;
server.set("port", port); //lager døren for å gå inn i serveren
server.use(express.json());
server.use (express.static("public"));




server.listen(server.get("port"),() => {});









