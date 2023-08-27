import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filterYear,setFilterYear] = useState("2020")
  
  const filteredValue = (filterData) => {
    setFilterYear(filterData)
  };

  const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filterYear;
  })
  return (
    <div className="expenses">
      <ExpensesFilter selected={filterYear} onFilteredValue={filteredValue}></ExpensesFilter>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default Expenses;
