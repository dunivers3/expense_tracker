const express = require("express")
const cors = require("cors")

const dotenv = require("dotenv")

const app = express()

//load env file
dotenv.config();

const PORT = process.env.PORT;

const server = () => {
	console.log("You're listening on port:", PORT);
};

server();
