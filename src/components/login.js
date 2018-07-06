import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { login } from '../actions/auth';

import { required, nonEmpty } from '../validators';

import Input from './input';

export class Login extends Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
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
        <label htmlFor="login-username">Username</label>
        <Field
          component={Input}
          type="text"
          name="login-username"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="login-password">Password</label>
        <Field
          component={Input}
          type="password"
          name="login-password"
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
