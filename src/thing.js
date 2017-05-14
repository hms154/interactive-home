import React from 'react';
import PropTypes from 'prop-types';

class Thing extends React.Component {

  render() {
    let displayString = this.getDisplayLabel() + this.getValue();
    return <p>{displayString}</p>;
  }
  getDisplayLabel() {
    return this.props.name + ": ";
  }
  getValue() {
    return this.props.value ? "On" : "Off";
  }
}

Thing.propTypes = {
  value: PropTypes.bool
};

export default Thing;
