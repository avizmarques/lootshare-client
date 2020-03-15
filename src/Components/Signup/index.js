import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../../store/user/session/actions";
import SignupForm from "./SignupForm";

class SignupContainer extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  onSubmit = async e => {
    e.preventDefault();

    try {
      await this.props.signup(this.state);
    } catch (err) {
      console.error(err);
    }
  };

  componentDidUpdate = () => {
    if (this.props.user.userCreated) {
      this.props.history.push("/");
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render = () => {
    return (
      <div className="signup">
        <SignupForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  };
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = { signup };

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
