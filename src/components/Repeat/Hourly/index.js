import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const RepeatHourly = ({
  hourly: {
    interval,
  },
  handleChange,
}) => (
  <div>
    every
    <input
      name="repeat.hourly.interval"
      className="form-control"
      value={interval}
      onChange={(event) => {
        // Convert input from string to number
        const inputNumber = +event.target.value;
        // Check if is a number and is less than 1000
        if (_.isNaN(inputNumber) || inputNumber >= 1000) return;

        const editedEvent = { target: { value: inputNumber, name: event.target.name } };
        handleChange(editedEvent);
      }}
    />
    day(s)

  </div>
);
RepeatHourly.propTypes = {
  hourly: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatHourly;
