import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [eneredTitle, setEnteredTitle] = useState('');
    const [eneredAmount, setEnteredAmount] = useState('');
    const [eneredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

    }
    const amountChangeHandler = (event) => {

        const mobileValidation = /^[0-9]{0,10}$/;
        const mobilevalcheck = mobileValidation.test(event.target.value);

        if (mobilevalcheck) {
            setEnteredAmount(event.target.value);
        }

    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    }
    const submithandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: eneredTitle,
            amount: eneredAmount,
            date: new Date(eneredDate)
        }
        props.getdata(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return (
        <form className="addDataForm" onSubmit={submithandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={eneredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" value={eneredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={eneredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense</button>
            </div>
        </form>

    )
}

export default ExpenseForm;