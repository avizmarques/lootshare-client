import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCharacter } from "../../store/character/actions";
import Chest from "../Chest";

export class CharacterDashboard extends Component {
  componentDidMount = () => {
    this.props.fetchCharacter(this.props.match.params.id);
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
      </div>
    );
  }
}

const mapStateToProps = state => ({ character: state.character });

const mapDispatchToProps = { fetchCharacter };

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDashboard);
