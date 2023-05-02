import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  //props is the object(key value pair) which is passed from app.js which contains date,amount and price

  // const [title, setTitle]= useState(props.title); //it will activate event handlers , it returns the array where the first value is the value itself and second is updating function , it also calls a function

  // const clickHandler= ()=>{
  //  setTitle('updated');
  // }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};
export default ExpenseItem;
