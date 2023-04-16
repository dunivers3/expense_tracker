const {addIncome, getIncomes, deleteIncomes} = require("../controllers/income")

const router = require("express").Router()

router.post("/add-income", addIncome)
    .get("/get-incomes", getIncomes)
    .delete("/delete-incomes/:id", deleteIncomes)

module.exports = router
