import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import FormContainer from "./Containers/FormContainer";

class BudgetApp extends React.Component {
  render() {
    return (
      <div className="col-8">
        <FormContainer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<BudgetApp />, rootElement);

//Each input field in the form got a Component of its own
//Entire App is divided into Presentational Components and Container Components
//Form values are controlled by the Component i.e Controlled Component
//The State holds the form data which is the single source of truth

//TO DOs
//1. Validate form inputs
//2. ALign items in the table
//3. Integrate backend database (like Firebase)
//4. Integrate highcharts or some data visualization
