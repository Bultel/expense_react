import './Card.css';
// card represente le bloc principal, la mise en page des differents compenents va venir de props.children
const Card = (props) => {
    const classes ='card ' + props.className;  // creation d'une constante pour racourcir l'ecriture 

    return <div className ={classes}>{props.children}</div>;  // insere dans la div les props des != enfants
}

export default Card;