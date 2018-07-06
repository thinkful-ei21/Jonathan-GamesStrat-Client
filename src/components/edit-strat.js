import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';

import Input from './input';

export class EditStrat extends Component {
  onSubmit(vals) {
    console.log(vals);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(vals => this.onSubmit(vals))}>
        <Field
          name="title"
          id="title"
          type="text"
          component={Input}
          element="input"
          label="Log Title"
          placeholder="LOG TITLE"
        />
        <Field
          name="strat"
          id="strat"
          type="text"
          component={Input}
          element="textarea"
          label="Strat"
          placeholder="ADD STRAT HERE"
        />
        <button>Save</button>
        <button>Cancel</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'strat'
  // onSubmitFail: (errors, dispatch) =>
  //   dispatch(focus('strat', Object.keys(errors)[0]))
})(EditStrat);
