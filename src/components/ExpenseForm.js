import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm (props) {
    const [Title,SetTitle] = useState('');
    const [Amount,SetAmount] = useState('');
    const [Datee,SetDate] = useState('');
    const titlechange = (event) => {
        SetTitle(event.target.value);
    };
    const amountchange = (event) => {
        SetAmount(event.target.value);
    };
    const datechange = (event) => {
        SetDate(event.target.value);
    };

    const onsubmit = (event) => {
        event.preventDefault();

        const expensedata={
            title:Title,
            amount:+Amount,
            date: new Date(Datee)
        };
        props.onsaveexpense(expensedata);
        SetTitle('');
        SetAmount('');
        SetDate('');
    };

    return <form onSubmit={onsubmit}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='Text' value={Title} onChange={titlechange}/>
            </div>
            <div className='new-expense__control'> 
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={Amount} onChange={amountchange}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={Datee} onChange={datechange}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel} > Cancel</button>
            <button type='submit' >Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;