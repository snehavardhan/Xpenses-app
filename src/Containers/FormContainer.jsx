import React, { Component } from "react";
import { render } from "react-dom";
import "../styles.css";

import Amount from "../Components/Amount";
import Button from "../Components/Button";
import Category from "../Components/Category";
import InputDate from "../Components/InputDate";
import Description from "../Components/Description";
import DisplayItems from "./DisplayItems";
import axios from "axios";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: {
        date: "",
        category: "",
        description: "",
        amount: ""
      },
      categoryOptions: [
        "Groceries",
        "Miscellaneous",
        "Drithi",
        "Pluto",
        "Car Gas",
        "Home Improvement"
      ],
      itemsArray: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(
      prevState => {
        return {
          newItem: { ...prevState.newItem, [name]: value }
        };
      }
      // () => console.log(this.state.newItem)
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let newData = this.state.newItem;
    console.log(newData);
    this.state.itemsArray.unshift(newData);
    console.log(this.state.itemsArray);

    //Sending data to backend (Firebase)
    axios
      .post("https://xpenses-ef2d0.firebaseio.com/data.json", newData)
      .then(response => console.log(response))
      .catch(error => console.log(error));

    this.setState({
      newItem: {
        date: "",
        category: "",
        description: "",
        amount: ""
      }
    });
  }

  render() {
    return (
      <div>
        <h1 className="titleStyles text-warning">Xpenses</h1>
        <p className="dateStyles">{new Date().toDateString()}</p>
        <div className="col-8">
          <form className="formStyles" onSubmit={this.handleSubmit}>
            <fieldset>
              <InputDate
                name="date"
                title="Date"
                type="date"
                value={this.state.newItem.date}
                handleChange={this.handleInputChange}
              />
              <Category
                name="category"
                title="Choose Category"
                options={this.state.categoryOptions}
                placeholder="Select Category"
                handleChange={this.handleInputChange}
                value={this.state.newItem.category}
              />
              <Description
                type="text"
                title="Description"
                name="description"
                value={this.state.newItem.description}
                placeholder="Ex: Freddies"
                handleChange={this.handleInputChange}
              />
              <Amount
                type="number"
                name="amount"
                title="Amount"
                value={this.state.newItem.amount}
                handleChange={this.handleInputChange}
              />
            </fieldset>
            <Button type="submit" title="Add Expense" />
          </form>
        </div>

        <div className="col-md-6">
          <DisplayItems entries={this.state.itemsArray} />
        </div>
      </div>
    );
  }
}

export default FormContainer;
