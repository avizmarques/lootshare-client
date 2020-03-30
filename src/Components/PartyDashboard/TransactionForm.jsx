import React, { Component } from "react";

export default class TransactionForm extends Component {
  state = {
    type: this.props.type,
    amount: {
      pp: 0,
      gp: 0,
      ep: 0,
      sp: 0,
      cp: 0
    },
    description: ""
  };

  onChange = e => {
    if (e.target.name === "description") {
      this.setState({ [e.target.name]: e.target.value });
    } else {
      this.setState({
        amount: {
          ...this.state.amount,
          [e.target.name]: parseInt(e.target.value)
        }
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render = () => {
    return (
      <div>
        <h2>Add {this.state.type}</h2>
        <form onSubmit={this.onSubmit}>
          <input type="number" name="pp" onChange={this.onChange} /> pp
        </form>
      </div>
    );
  };
}
