import React, { Component } from "react";
import { connect } from "react-redux";
import { makeTransaction } from "../../store/party/actions";

export class TransactionForm extends Component {
  state = {
    type: this.props.type,
    amount: {
      pp: 0,
      gp: 0,
      ep: 0,
      sp: 0,
      cp: 0
    },
    description: "",
    chestId: this.props.chestId
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
    this.props.makeTransaction(this.state);
    this.setState({
      amount: {
        pp: 0,
        gp: 0,
        ep: 0,
        sp: 0,
        cp: 0
      },
      description: ""
    });
  };

  render = () => {
    return (
      <div>
        <h2>Add {this.state.type}</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <div>pp</div>
            <input
              type="number"
              name="pp"
              value={this.state.amount.pp}
              onChange={this.onChange}
            />
          </div>
          <div>
            <div>gp</div>
            <input
              type="number"
              name="gp"
              value={this.state.amount.gp}
              onChange={this.onChange}
            />
          </div>
          <div>
            <div>ep</div>
            <input
              type="number"
              name="ep"
              value={this.state.amount.ep}
              onChange={this.onChange}
            />
          </div>
          <div>
            <div>sp</div>
            <input
              type="number"
              name="sp"
              value={this.state.amount.sp}
              onChange={this.onChange}
            />
          </div>
          <div>
            <div>cp</div>
            <input
              type="number"
              name="cp"
              value={this.state.amount.cp}
              onChange={this.onChange}
            />
          </div>
          <div>
            <div>description</div>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>
          <button onSubmit={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  chestId: state.party.currentParty.chestId
});

const mapDispatchToProps = { makeTransaction };

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
