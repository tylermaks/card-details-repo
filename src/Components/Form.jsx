import React, {useState} from "react"

import "../Assets/Styles/Form/Form.css"

function Form(props) {
    const [focused, setFocused] = useState(false)

    const handleFocus = (e) =>{
        setFocused(true)
    }

    return(
        <form action="POST">
            <div>
                <label htmlFor="cardholder">Cardholder Name</label>
                <input 
                    id="cardholder" 
                    className="lrg" 
                    placeholder="e.g. Jane Appleseed" 
                    type="text" 
                    pattern="^([ \u00c0-\u01ffa-zA-Z'\-])+$"
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required
                />
                <span className="error">Cannot be blank</span>
            </div>
            
            <div>
                <label htmlFor="card-num">Card Number</label>
                <input 
                    id="card-num" 
                    className="card-num lrg" 
                    placeholder="e.g. 1234 5678 9123 0000"
                    type="number" 
                    maxLength={16}
                    onChange={props.change}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required 
                />
                <span className="error">Cannot be blank</span>
            </div>

            
            <div className="date-cvc-container">
                <div className="date-details">
                    <label htmlFor="exp-date">Exp Date (MM/YY)</label>
                    <input 
                        id="month" 
                        className="small small--right" 
                        placeholder="MM" 
                        type="text"
                        pattern="^[0-9]*$"
                        maxLength={2}
                    />
                    <input 
                        id="year" 
                        className="small" 
                        placeholder="YY" 
                        type="number"
                        pattern="^[0-9]*$" 
                        maxLength={2}
                    />
                    <span className="error">Cannot be blank</span>
                </div>
                <div className="cvc-container">
                    <label htmlFor="cvc">CVC</label>
                    <input 
                        id="cvc" 
                        className="lrg"
                        placeholder="e.g. 123" 
                        type="number" 
                        maxLength={3}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        required
                    />
                     <span className="error">Cannot be blank</span>
                </div>
            </div>

            <button onClick={props.submit}>Confirm</button>
        </form>
    )
}

export default Form;