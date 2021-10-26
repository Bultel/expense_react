import React, {useState} from 'react';
import './ExpenseObject.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';

const ExpenseObject = (props) => {
  const [filteredYear, setFilteredYear] = useState ("2020"); // [0]= etat de mon stat (etat initial) [1] = fonction qui permet de modifier la valeur de l'etat
  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear (selectedYear);
  };
  const filteredExpense = props.items.filter (expense => { //crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction
    return expense.date.getFullYear().toString () === filteredYear; //getFullYear renvoie l'aneeé de la date
  })

      return(
        <div>
        {/* card represente le bloc principale UI */}
        <Card className = "expenses">  
        <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
        {/* Utilisation de notre component sous forme de balise autofermante */}
        {/* On passe en parametres les valeurs de notre objet grace a PROPS du component */}
        {/* map permet de recreer un tableau a partir d'un autre (changer les valeurs) */}
        {/* les valeurs de expense s'afficherons dans mon component expenseItem dynamiquement */}
        {/* condition ternaire pour afficher pas de valeurs si aucune value presente dans year */}

        <ExpenseList items = {filteredExpense}/>;

      </Card>  
      </div>
      )
}

export default ExpenseObject;