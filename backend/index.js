require("dotenv").config();

const PORT = process.env.PORT;

const server = () => {
	console.log("You're listening on port:", PORT);
};

server();
