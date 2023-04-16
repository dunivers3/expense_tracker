const express = require("express")
const cors = require("cors")
const {db} = require("./db/db")
const {readdirSync} = require("fs")
const dotenv = require("dotenv")
const app = express()

//load env file
dotenv.config();
const PORT = process.env.PORT;

//middlewares
app.use(express.json())
app.use(cors())

//Routes
readdirSync("./routes").map( (route) => app.use("/api/v1", require("./routes/" + route)))

//GET request
app.get("/", (req,res) => {
	res.send("Here is a list of your expenses")
})

//POST request
app.post("/expenses", (req, res) => {
	res.sendFile("./routes/")
}) 


const server = () => {
	db()
	app.listen(PORT, () => {
		console.log("You're listening on port:", PORT);
	})
};

server();
