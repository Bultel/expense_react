import React, {useState} from 'react';   // useState function react permet de refleter nos interaction dans la page.
// useState called React hook
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import'./ExpenseItems.css'; // Import de mon compenent CSS 

// PROPS permet de prendre les valeurs de notre objet pour les reutiliser
const ExpenseItem = (props) => {     //Un Conmpnent est sous forme de fonction 
const [title, setTitle] = useState(props.title);                      // appelle de la fonction useState imperativement dans la fonction du component
//retourne un array, first value retoune lui meme, second value return uptdating function 
// title = props.title and setTitle = function new value. j'ai choisi le nom.
console.log("expensesItem nb comportment")

const clickHandler = ()=>{
    setTitle ("Updated");     // Calling function and passed new value as argument
};

    return(
        // Syntaxe JSX
        <Card className = "expense-item">
            <ExpenseDate date = {props.date}/>
            {/* PROPS.object key */}
            <div className = "expense-item__description">
                {/* title = const title, setTitle */}
                <h2>{title}</h2>  
                <div className = "expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    )
}


export default ExpenseItem;             //Export de mon comptent vers mon APP.JS