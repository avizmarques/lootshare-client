import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserDashboard } from "../../store/user/actions";
import PartyCard from "./PartyCard";
import CharacterCard from "./CharacterCard";

export class UserDashboard extends Component {
  componentDidMount = () => {
    this.props.fetchUserDashboard(this.props.match.params.id);
  };

  render = () => {
    if (!this.props.parties || !this.props.characters) {
      return "Loading...";
    }

    return (
      <div>
        <h1>My parties</h1>
        {this.props.parties.map(party => (
          <PartyCard party={party} />
        ))}
        <h1>My characters</h1>
        {this.props.characters.map(char => (
          <CharacterCard character={char} />
        ))}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  parties: state.user.parties,
  characters: state.user.characters
});

const mapDispatchToProps = { fetchUserDashboard };

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
