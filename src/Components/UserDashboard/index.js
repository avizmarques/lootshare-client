import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserDashboard, createCharacter } from "../../store/user/actions";
import PartyCard from "./PartyCard";
import CharacterCard from "./CharacterCard";
import CreateCharacterOrPartyForm from "../CreateCharacterOrParty";

const initialState = {
  showForm: false,
  name: "",
  pp: 0,
  gp: 0,
  ep: 0,
  sp: 0,
  cp: 0
};

export class UserDashboard extends Component {
  state = { ...initialState, userId: parseInt(this.props.match.params.id) };

  componentDidMount = () => {
    this.props.fetchUserDashboard(this.state.userId);
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createCharacter(this.state);
    this.setState({ ...initialState });
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
        <CreateCharacterOrPartyForm
          type="character"
          toggleForm={this.toggleForm}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  };
}

const mapStateToProps = state => ({
  parties: state.user.parties,
  characters: state.user.characters
});

const mapDispatchToProps = { fetchUserDashboard, createCharacter };

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
