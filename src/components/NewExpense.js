import React from 'react'

import ExpenseForm from './ExpenseForm'

const NewExpense=(props)=>{

    
    return(
        <div className='NewExpense'>
         <ExpenseForm  getdata={props.data}  />

        </div>
    )
}

export default NewExpense;