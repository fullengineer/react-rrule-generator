import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import RepeatMonthlyOn from './On';
import RepeatMonthlyOnThe from './OnThe';

const RepeatMonthly = ({
  monthly: {
    mode,
    frequency,
    on,
    onThe,
  },
  handleChange,
}) => (
  <div>
    every
    <input
      name="repeat.monthly.frequency"
      className="form-control"
      value={frequency}
      onChange={(event) => {
        // Convert input from string to number
        const inputNumber = +event.target.value;
        // Check if is a number and is less than 1000
        if (_.isNaN(inputNumber) || inputNumber >= 1000) return;

        const editedEvent = { ...event, target: { ...event.target, value: inputNumber, name: event.target.name } };
        handleChange(editedEvent);
      }}
    />
    month(s)

    <RepeatMonthlyOn mode={mode} on={on} handleChange={handleChange} />
    <RepeatMonthlyOnThe mode={mode} onThe={onThe} handleChange={handleChange} />

  </div>
);
RepeatMonthly.propTypes = {
  monthly: PropTypes.shape({
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    frequency: PropTypes.number.isRequired,
    on: PropTypes.object.isRequired,
    onThe: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthly;
