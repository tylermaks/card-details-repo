import React from "react"

import "../Assets/Styles/ThankYou/ThankYou.css"

import complete from "../Assets/images/icon-complete.svg"

function ThankYou(){
    return(
        <div className="thank-you-container">
            <img src={complete} alt="Complete" />
            <article className="thank-you-text">
                <h1>THANK YOU!</h1>
                <p>We've add your card details</p>
            </article>
            <button className="cont-btn">Continue</button>
        </div>
    )
}

export default ThankYou;