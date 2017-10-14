import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const EndAfter = ({
  after,
  handleChange,
}) => (
  <div>
    <input
      name="end.after"
      className="form-control"
      value={after}
      onChange={(event) => {
        // Convert input from string to number
        const inputNumber = +event.target.value;
        // Check if is a number and is less than 1000
        if (_.isNaN(inputNumber) || inputNumber >= 1000) return;

        const editedEvent = { ...event, target: { ...event.target, value: inputNumber, name: event.target.name } };
        handleChange(editedEvent);
      }}
    />
    executions.
  </div>
);

EndAfter.propTypes = {
  after: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EndAfter;
