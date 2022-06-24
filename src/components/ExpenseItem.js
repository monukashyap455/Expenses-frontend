import './ExpenseItem.css'

const ExpenseItem = (props) => {
    return (

        <div className='expense-Item'>

            <div className='expense-Item h2'>{props.date}</div>
            <div className='expense-Item__description'>
                <h2 >{props.title}</h2>
                <div className='expense-Item__price'>${props.amount} </div>
            </div>
         
        </div>

    )

}

export default ExpenseItem;