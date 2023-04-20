const {addIncome, getIncomes, deleteIncomes} = require("../controllers/income")
const {addExpense, getExpenses, deleteExpenses} = require("../controllers/expense")

const router = require("express").Router()

router.post("/add-income", addIncome)
    .get("/get-incomes", getIncomes)
    .delete("/delete-incomes/:id", deleteIncomes)
    //expenses
    .post("/add-expense", addExpense)
    .get("/get-expenses", getExpenses)
    .delete("/delete-expenses/:id", deleteExpenses)

module.exports = router
