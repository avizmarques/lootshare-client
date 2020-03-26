import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchParty } from "../../store/party/actions";
import Chest from "../Chest";
import PartyBalances from "./PartyBalances";
import LootList from "./LootList";

export class PartyDashboard extends Component {
  componentDidMount = () => {
    this.props.fetchParty(this.props.match.params.id);
  };

  render = () => {
    if (!this.props.party.name) {
      return "Loading...";
    }

    const { name, chest, characters } = this.props.party;

    return (
      <div>
        <h1>{name}</h1>
        <Chest chest={chest} />
        <div>
          <h2>Party Balances</h2>
          {characters.map(char => (
            <PartyBalances character={char} />
          ))}
        </div>
        <LootList loot={this.props.party.recentLoot} />
      </div>
    );
  };
}

const mapStateToProps = state => ({ party: state.party.currentParty });

const mapDispatchToProps = { fetchParty };

export default connect(mapStateToProps, mapDispatchToProps)(PartyDashboard);
