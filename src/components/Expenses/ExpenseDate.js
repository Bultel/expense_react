import "./ExpenseDate.css"

const ExpenseDate = (props) => {

    // envoie une chaine de caractères représentant la date selon une locale
    const month = props.date.toLocaleString ('fr-FR', {month: "long"}); 
    const day = props.date.toLocaleString ("fr-FR", {day: "2-digit"});
    const year = props.date.getFullYear();

    return (
    <div className = "expense-date">
        <div className = "expense-date__month">{month}</div>
        <div className = "expense-date__day">{day}</div>
        <div className = "expense-date__year">{year}</div>
        
    </div>
    );   
}


export default ExpenseDate;