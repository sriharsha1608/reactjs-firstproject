import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react/cjs/react.development";

function NewExpense (props){
    const [isediting, Setisediting] = useState(false);
    const saveexpensehandler = (entereddata) =>{
        const expensedata ={
            ...entereddata,
            id: Math.random().toString()
        };
        props.onapp(expensedata);
        Setisediting(false);
    };

    const startediting = () => {
        Setisediting(true);
    };

    const Stopediting = () => {
        Setisediting(false);
    }

    return (
    <div className='new-expense'>
        {!isediting && <button onClick={startediting}>Add New Expense</button>}
        {isediting && <ExpenseForm onsaveexpense={saveexpensehandler} onCancel={Stopediting}/>}
    </div>
    );
};

export default NewExpense;