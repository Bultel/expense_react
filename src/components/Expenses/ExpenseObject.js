import './ExpenseObject.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const ExpenseObject = (props) => {
      return(
        // card represente le bloc principale UI
        <Card className = "expenses">  
        {/* Utilisation de notre component sous forme de balise autofermante */}
        {/* On passe en parametres les valeurs de notre objet grace a PROPS du component */}
        <ExpenseItem title = { props.items[0].title} amount = { props.items[0].amount} date = {props.items[0].date} />
        <ExpenseItem title = { props.items[1].title} amount = { props.items[1].amount} date = {props.items[1].date}/>
        <ExpenseItem title = { props.items[2].title} amount = { props.items[2].amount} date = {props.items[2].date}/>
        <ExpenseItem title = { props.items[3].title} amount = { props.items[3].amount} date = {props.items[3].date}/>
      </Card>  
      )
}

export default ExpenseObject;