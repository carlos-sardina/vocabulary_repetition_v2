import express from "express";
import application from "./src/app";
const server = express();
import path from 'path';

// servir la app con express
server.use(express.static(path.join(__dirname, 'client/build')));
server.get('/', (req, res) => res.sendFile(path.join(__dirname + '/client/build/index.html')));

// app entry point
server.use('/api', application);

server.listen(process.env.PORT || 80, () => {
    console.log("Server running on http://localhost:" + process.env.PORT || 80);
});