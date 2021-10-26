import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


// POur passer des ifos avec props, il faut pas oubliez les components intermediaire, expenseform=>newexpense=>app
// dans un premier temps il faut s'occuper de expenseform
const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,        // destructuring array
            id: Math.random().toString()  // genere un id unique aleatoire avec nos donnée Super important pattern
        }
        console.log (expenseData);        // On continue la chaine des component, on s'occuper maintenant de app
        props.onAddExpense (expenseData);                                // c'est app qui contient l'objet expenses
    }

    return (
        <div className = "new-expense">
            {/* onsaveexpensedata, nom que je choisi moi, ma fonction sauvegarde les data */}
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>  
        </div>
    )
};

export default NewExpense;