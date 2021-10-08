import Card from "./Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expense(props) {
    const [year,selecteduseState] = useState('2020');
    const changefilter = eneterd =>{
        selecteduseState(eneterd);
    }
    const filteredexpnese = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === year;
    });

    return(
        <ol>
        <div>
        <Card className='expense'>
            <ExpensesFilter 
                reflect={year} 
                onchangefil={changefilter}
            />
            <ExpensesChart expenses={filteredexpnese}/>
            <ExpenseList items={filteredexpnese}/>
        
        </Card>

        </div>
        </ol>
    )
};

export default Expense;