import React, {useState} from 'react';
import ExpenseObject from './components/Expenses/ExpenseObject';   // Import de mon component
import NewExpense from './components/NewExpense/NewExpense';       // Import formulaire

// Creation d'un objet pour stocker nos data
const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date (2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date (2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.12,
    date: new Date (2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450,
    date: new Date (2021, 5, 12),
  },
]

// fonction pour trier les elements par date 
const App= () => {
  const [expenses, setExpenses] = useState (DUMMY_EXPENSE);

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      {/* onaddexpense nom que j'ai donnée */}
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <ExpenseObject items = {expenses}/>
    </div>
    
  )
}

export default App;
