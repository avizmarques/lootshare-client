import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchParties } from "../../store/party/actions";
import PartyCard from "./PartyCard";

export class UserDashboard extends Component {
  componentDidMount = () => {
    this.props.fetchParties(this.props.match.params.id);
  };

  render = () => {
    if (!this.props.parties.length) {
      return "Loading...";
    }

    return (
      <div>
        <h1>My parties</h1>
        {this.props.parties.map(party => (
          <PartyCard party={party} />
        ))}
      </div>
    );
  };
}

const mapStateToProps = state => ({ parties: state.party.allParties });

const mapDispatchToProps = { fetchParties };

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
