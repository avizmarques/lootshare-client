import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchParty } from "../../store/party/actions";
import Chest from "../Chest";
import PartyBalances from "./PartyBalances";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";

export class PartyDashboard extends Component {
  state = {
    showForm: false,
    typeForm: ""
  };

  componentDidMount = () => {
    this.props.fetchParty(this.props.match.params.id);
  };

  toggleForm = type => {
    this.setState({ showForm: !this.state.showForm, typeForm: type });
  };

  render = () => {
    if (!this.props.party.name) {
      return "Loading...";
    }

    const { name, chest, chestId, characters } = this.props.party;

    return (
      <div>
        <div>
          <h1>{name}</h1>
          <Chest chest={chest} />
          <button onClick={() => this.toggleForm("loot")}>Add Loot</button>
          <button onClick={() => this.toggleForm("expense")}>
            Add Expense
          </button>
          {this.state.showForm && (
            <TransactionForm type={this.state.typeForm} chestId={chestId} />
          )}
        </div>
        <div>
          <h2>Party Balances</h2>
          {characters.map(char => (
            <PartyBalances character={char} />
          ))}
        </div>
        <div>
          <h2>Recent Loot</h2>
          <TransactionList transactions={this.props.party.recentLoot} />
        </div>
        <div>
          <h2>Recent Expenses</h2>
          <TransactionList transactions={this.props.party.recentExpenses} />
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({ party: state.party.currentParty });

const mapDispatchToProps = { fetchParty };

export default connect(mapStateToProps, mapDispatchToProps)(PartyDashboard);
