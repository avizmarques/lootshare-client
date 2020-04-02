import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllParties } from "../../store/party/actions";
import PartyCard from "../UserDashboard/PartyCard";

export class PartyList extends Component {
  componentDidMount = () => {
    this.props.fetchAllParties();
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
      </div>
    );
  };
}

const mapStateToProps = state => ({ parties: state.party.allParties });

const mapDispatchToProps = { fetchAllParties };

export default connect(mapStateToProps, mapDispatchToProps)(PartyList);
