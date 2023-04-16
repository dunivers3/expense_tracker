const mongoose = require("mongoose")

const IncomeSchema = new mongoose.Schema({
	title:{
		type: String,
		required: true,
		maxLength: 50,
		trim: true
	},

	amount:{
		type: Number,
		maxLength: 20,
		trim: true,
		required: true
	},

	type: {
		type: String,
		default: "Income"
	},

	date: {
		type: Date,
		required: true
	},

	category:{
		type: String,
		trim: true,
		required: true
	},

	description: {
		type: String,
		trim: true,
		required: true,
		maxLength: 20
	}

}, 

{
	timestamps:true
})

module.exports = mongoose.model("Income", IncomeSchema)
