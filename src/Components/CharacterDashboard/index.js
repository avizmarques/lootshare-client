import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCharacter } from "../../store/character/actions";
import Chest from "../Chest";
import TransactionForm from "../PartyDashboard/TransactionForm";

export class CharacterDashboard extends Component {
  state = {
    showForm: false,
    typeForm: "",
    typeChest: "character"
  };

  componentDidMount = () => {
    this.props.fetchCharacter(this.props.match.params.id);
  };

  toggleForm = type => {
    this.setState({ showForm: !this.state.showForm, typeForm: type });
  };

  render() {
    if (!Object.keys(this.props.character).length) {
      return "Loading...";
    }

    const { name, party, chest } = this.props.character;

    return (
      <div>
        <h2>{name}</h2>
        <div>{party}</div>
        <Chest chest={chest} />
        <button onClick={() => this.toggleForm("expense")}>Add Expense</button>
        <button onClick={() => this.toggleForm("loot")}>Add Loot</button>
        {this.state.showForm && (
          <TransactionForm
            typeForm={this.state.typeForm}
            typeChest={this.state.typeChest}
            chestId={this.props.character.chestId}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ character: state.character });

const mapDispatchToProps = { fetchCharacter };

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDashboard);
