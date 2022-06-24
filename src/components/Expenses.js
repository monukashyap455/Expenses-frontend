import React from "react";
import './Expenses.css';
import ExpenseItem from './ExpenseItem';


const Expenses = (props) => {
    return (
        <div className='expenses'>
            {
                props.items.map(
                    (expense,index) => (
                        <ExpenseItem
                            key={index}
                            date={expense.date}
                            title={expense.title}
                            amount={expense.amount} />

                    )
                )
            }

        </div>
    )

}



export default Expenses;