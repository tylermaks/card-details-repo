import React from "react"

import "../Assets/Styles/CreditCard/CreditCard.css"
import logo from "../Assets/images/card-logo.svg"

function CreditCard (props){
    return(
        <div className={"credit-card credit-card--" + props.class}>
            <img className={"logo--" + props.class} src={logo} alt="logo" />
            <span className={"name-date security-num--" + props.class}>000</span>
            <div className={"card-details card-details--" + props.class}> 
                <div>  
                    <span className="credit-digit">0000</span>
                    <span className="credit-digit">0000</span>
                    <span className="credit-digit">0000</span>
                    <span className="credit-digit">0000</span>
                </div>
        
                <div className="name-date">
                    <span>JANE APPLESEED {props.name}</span>
                    <span>00/00{props.expDate}</span>
                </div>
            </div>
        </div>
    )
}

export default CreditCard;