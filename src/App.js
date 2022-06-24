import React, { useState, useEffect } from "react";

import NewExpense from "./components/NewExpense";

import Expenses from "./components/Expenses";



const App = () => {

    const [expenses, setExpenses] = useState([]);

    function fetchData() {
        fetch("http://localhost:4000/expenses").then(
            res => {
                return res.json()
            }
        ).then(
            data => {
                setExpenses(data)
            }
        ).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData();

    }, []);

    const postAPI = (data) => {
        fetch('http://localhost:4000/expenses', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        }).then(
            response => {
                fetchData();
            }
        );
    };

    return (
        <div>
            <NewExpense data={postAPI} />

            <Expenses items={expenses} />

        </div>
    );

}

export default App;