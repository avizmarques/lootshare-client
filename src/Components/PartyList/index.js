import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllParties, createParty } from "../../store/party/actions";
import PartyCard from "../UserDashboard/PartyCard";
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

export class PartyList extends Component {
  state = { ...initialState };

  componentDidMount = () => {
    this.props.fetchAllParties();
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
    this.props.createParty(this.state);
    this.setState({ ...initialState });
  };

  render = () => {
    const parties = this.props.parties;

    if (!parties.length) {
      return "Loading...";
    }

    return (
      <div>
        <h1>All parties</h1>
        {parties.map(party => (
          <PartyCard party={party} />
        ))}
        <CreateCharacterOrPartyForm
          type="party"
          toggleForm={this.toggleForm}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  };
}

const mapStateToProps = state => ({ parties: state.party.allParties });

const mapDispatchToProps = { fetchAllParties, createParty };

export default connect(mapStateToProps, mapDispatchToProps)(PartyList);
