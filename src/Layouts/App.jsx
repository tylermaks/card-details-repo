import React, {useState} from "react"

import CreditCard from "../Components/CreditCard"
import Form from "../Components/Form"
import ThankYou from "../Components/ThankYou"

import "../Assets/Styles/AppStyles/App.css"


function App() {
  
  const [submit, setSubmit] = useState(false)

  const handleSubmit = () => {
      setSubmit(true)
  }


  const handleChange = (e) =>{ 
    console.log(e.target)
  }

  return (
    <main className="App">
      <section className="card-container">
          <CreditCard class="back"/>
          <CreditCard class="front"/>
      </section>
      <section className="form-container">
        { submit ? <ThankYou /> : <Form change={handleChange} submit={handleSubmit}/>}
      </section>
    </main>
  );
}

export default App;
