import React, {useState} from "react"

import "../Assets/Styles/Form/Form.css"

function Form(props) {

    return(
        <form action="POST">
            <label htmlFor="cardholder">Cardholder Name</label>
            <input id="cardholder" className="lrg" type="text" placeholder="e.g. Jane Appleseed" />
            <label htmlFor="card-num">Card Number</label>
            <input id="card-num" onChange={props.change} className="lrg" type="number" placeholder="e.g. 1234 5678 9123 0000"/>

            <div className="date-cvc-container">
                <div className="date-details">
                    <label htmlFor="exp-date">Exp Date (MM/YY)</label>
                    <input id="month" className="small small--right" type="number" placeholder="MM" maxLength={2}/>
                    <input id="year" className="small" type="number" placeholder="YY" maxLength={2}/>
                </div>
                <div className="cvc-container">
                    <label htmlFor="cvc">CVC</label>
                    <input id="cvc" className="lrg"type="number" placeholder="e.g. 123" maxLength={3}/>
                </div>
            </div>

            <button onClick={props.submit}>Confirm</button>
        </form>
    )
}

export default Form;