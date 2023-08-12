
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {
            id: 'e1',
            expenseitem: 'travell',
            location: 'Airport',
            expense: 100
        },
        {
            id: 'e2',
            expenseitem: 'cloth',
            location: 'Mall',
            expense: 50
        },
        {
            id: 'e3',
            expenseitem: 'house',
            location: 'pune',
            expense: 700000
        }
    ];

    return (
        <div>
            <h2>Expense Items</h2>
            {expenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    expenseitem={expense.expenseitem}
                    expense={expense.expense}
                    location={expense.location}
                />
            ))}
        </div>
    );
}

export default App;
