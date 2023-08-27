import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const filteredValue = (filterData) => {
    console.log(filterData);
  };

  return (
    <div className="expenses">
      <ExpensesFilter onFilteredValue={filteredValue}></ExpensesFilter>
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default Expenses;
