import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import '../styles/add-strat.css';
import requiresLogin from './requires-login';
import { saveStrat } from '../actions/save-strat';
import Input from './input';

export class AddStrat extends Component {
  onSubmit(vals) {
    const gameId = this.props.match.params.gameId;
    const { title, content } = vals;
    const newStrat = { title, content, gameId };
    return this.props
      .dispatch(saveStrat(newStrat))
      .then(() => this.props.history.push(`/game/${gameId}`));
  }

  render() {
    return (
      <form
        className="addStratForm"
        onSubmit={this.props.handleSubmit(vals => this.onSubmit(vals))}
      >
        <h3>Add a New Strategy</h3>
        <label className="addStratLabel" htmlFor="title">
          Title
        </label>
        <Field
          name="title"
          id="title"
          type="text"
          component={Input}
          element="input"
        />
        <label className="addStratLabel" htmlFor="content">
          Strategy
        </label>
        <Field
          name="content"
          id="content"
          type="text"
          component={Input}
          element="textarea"
        />
        <button
          className="saveCancelButton"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Save
        </button>
        <Link to={`/game/${this.props.match.params.gameId}`}>
          <button className="saveCancelButton cancel">Cancel</button>
        </Link>
      </form>
    );
  }
}

AddStrat = requiresLogin()(AddStrat);

export default reduxForm({
  form: 'strat',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('strat', Object.keys(errors)[0]))
})(AddStrat);
