import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';

import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';

import Input from './input';

import '../styles/login.css';

export class Login extends Component {
  onSubmit(values) {
    return this.props
      .dispatch(login(values.loginUsername, values.loginPassword))
      .then(() => this.props.history.push('/search'));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        role="search"
        className="loginForm"
        onSubmit={this.props.handleSubmit(vals => this.onSubmit(vals))}
      >
        <h3>LOGIN</h3>
        {error}
        <label className="loginLabel" htmlFor="loginUsername">
          Username
        </label>
        <Field
          component={Input}
          type="text"
          id="loginUsername"
          name="loginUsername"
          validate={[required, nonEmpty]}
        />
        <label className="loginLabel" htmlFor="loginPassword">
          Password
        </label>
        <Field
          component={Input}
          type="password"
          id="loginPassword"
          name="loginPassword"
          validate={[required, nonEmpty]}
        />
        <button className="loginButton">Login</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Login);
