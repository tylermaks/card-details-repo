import React from "react"

import CreditCard from "../Components/CreditCard"
import Form from "../Components/Form"
import ThankYou from "../Components/ThankYou"

import "../Assets/Styles/AppStyles/App.css"


function App() {
  return (
    <main className="App">
      <section className="card-container">
         <CreditCard class="back"/>
          <CreditCard class="front"/>
      </section>
      <section className="form-container">
        {/* <Form /> */}
        <ThankYou />
      </section>
    </main>
  );
}

export default App;
