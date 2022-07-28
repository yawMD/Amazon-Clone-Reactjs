import React from 'react';
import "./Cards.css"

const Card = (props) =>{
    return(
        <div className="card">
        <h2>{props.title}</h2>
        <div className="main">
        <div className="access"><img width="50px" height="50px" src={props.img}/></div>
        <div className="access"><img width="50px" height="50px" src={props.img}/></div>
        <div className="access"><img width="50px" height="50px" src={props.img}/></div>
        <div className="access"><img width="50px" height="50px" src={props.img}/></div>
        <p><a>{props.next}</a></p>
        </div>
        </div>
    )
}

export default Card