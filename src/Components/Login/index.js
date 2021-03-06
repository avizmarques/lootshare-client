import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/user/actions";
import LoginForm from "./LoginForm";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  onSubmit = async e => {
    try {
      e.preventDefault();
      await this.props.login(this.state);
    } catch (err) {
      console.error(err);
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidUpdate = () => {
    const { id, token } = this.props.user;
    if (token) {
      this.props.history.push(`/user/${id}/dashboard`);
    }
  };

  render = () => {
    const { userCreated, token } = this.props.user;
    return (
      <div>
        {userCreated && !token && <p>Signup successful, please login.</p>}
        {token ? (
          <p>You are already logged in</p>
        ) : (
          <LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        )}
      </div>
    );
  };
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
