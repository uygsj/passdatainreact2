

function ExpenseItem(props) {
    return (
        <div className="expense-Food">
            <div>Location: {props.location}</div>
            <div>Expense Item: {props.expenseitem}</div>
            <div>Expense: ${props.expense}</div>
        </div>
    );
}

export default ExpenseItem;
