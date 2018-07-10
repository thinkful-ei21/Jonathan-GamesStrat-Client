import React from 'react';

export default class Input extends React.Component {
  render() {
    const Element = this.props.element || 'input';

    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>;
    }
    return (
      <div>
        {error}
        <Element
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          element={this.props.element}
          placeholder={this.props.placeholder}
        >
          {this.props.children}
        </Element>
      </div>
    );
  }
}
