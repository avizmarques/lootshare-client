import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchParties } from "../../store/party/actions";

export class UserDashboard extends Component {
  componentDidMount = () => {
    this.props.fetchParties(this.props.match.params.id);
  };

  render = () => {
    return (
      <div>
        <h1>My parties</h1>
      </div>
    );
  };
}

const mapStateToProps = state => ({ parties: state.party.allParties });

const mapDispatchToProps = { fetchParties };

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
