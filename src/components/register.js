import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';

import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import Input from './input';

const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export class Registration extends Component {
  onSubmit(values) {
    const { username, password, firstName, lastName } = values;
    const user = { username, password, firstName, lastName };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
      .then(() => this.props.history.push('/welcome'));
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(vals => this.onSubmit(vals))}>
        <h3>Register</h3>
        <label htmlFor="firstName">First name</label>
        <Field component={Input} type="text" name="firstName" />
        <label htmlFor="lastName">Last name</label>
        <Field component={Input} type="text" name="lastName" />
        <label htmlFor="reg-username">Username</label>
        <Field
          component={Input}
          type="text"
          name="username"
          id="username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="reg-password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          id="password"
          validate={[required, passwordLength, isTrimmed]}
        />
        <label htmlFor="validate-password">Verify Password</label>
        <Field
          component={Input}
          type="password"
          name="validate-password"
          id="validate-password"
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Register
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(Registration);
