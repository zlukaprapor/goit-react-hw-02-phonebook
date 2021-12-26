import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const singleContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(4),
    };
    this.props.addToPhonebook(singleContact);
    this.render();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              onChange={this.inputHandler}
              type="text"
              name="name"
              placeholder="Enter name..."
              value={name}
            ></input>
          </label>
          <label>
            <input
              onChange={this.inputHandler}
              type="tel"
              name="number"
              placeholder="Enter number..."
              value={number}
            ></input>
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
Form.propTypes = {
  addToPhonebook: PropTypes.func.isRequired,
};
export default Form;
