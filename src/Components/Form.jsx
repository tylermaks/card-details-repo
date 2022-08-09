import React from "react"

import "../Assets/Styles/Form/Form.css"

function Form() {
    return(
        <form action="POST">
            <label htmlFor="cardholder">Cardholder Name</label>
            <input id="cardholder" className="lrg" type="text" placeholder="e.g. Jane Appleseed" />
            <label htmlFor="card-num">Card Number</label>
            <input id="card-num" className="lrg" type="text" placeholder="e.g. 1234 5678 9123 0000"/>

            <div className="date-cvc-container">
                <div className="date-details">
                    <label htmlFor="exp-date">Exp Date (MM/YY)</label>
                    <input id="month" className="small small--right" type="text" placeholder="MM"/>
                    <input id="year" className="small" type="text" placeholder="YY"/>
                </div>
                <div className="cvc-container">
                    <label htmlFor="cvc">CVC</label>
                    <input id="cvc" className="lrg"type="text" placeholder="e.g. 123" />
                </div>
            </div>

            <button>Confirm</button>
        </form>
    )
}

export default Form;