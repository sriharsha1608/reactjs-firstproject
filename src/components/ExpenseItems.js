//import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItems.css";

function ExpenseItems(props) {
  // const [title, SetTitle] = useState(props.title);


  // const clickholder = () =>{
  //   SetTitle('Updated!');
  //   console.log(title);
  // }; 
    return (
      <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
              <h2>{props.title}</h2>
              <div className='expense-item__price'>${props.amount}</div>
          </div>
      </Card>
    );
  }
  
  export default ExpenseItems;