import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { login } from '../actions/auth';

import { required, nonEmpty } from '../validators';

import Input from './input';

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
      <form onSubmit={this.props.handleSubmit(vals => this.onSubmit(vals))}>
        {error}
        <h3>LOGIN</h3>
        <label htmlFor="loginUsername">Username</label>
        <Field
          component={Input}
          type="text"
          name="loginUsername"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="loginPassword">Password</label>
        <Field
          component={Input}
          type="password"
          name="loginPassword"
          validate={[required, nonEmpty]}
        />
        <button>Login</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Login);
