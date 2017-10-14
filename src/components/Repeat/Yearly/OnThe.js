import React from 'react';
import PropTypes from 'prop-types';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'Day', 'Weekday', 'Weekend day'];

const RepeatYearlyOnThe = ({
  mode,
  onThe,
  handleChange,
}) => (
  <div>
    <input
      type="radio"
      name="repeat.yearly.mode"
      className="form-control"
      checked={mode === 'on the'}
      onChange={(event) => {
        const editedEvent = { ...event, target: { ...event.target, value: 'on the', name: event.target.name } };
        handleChange(editedEvent);
      }}
    />
    on the

    <select
      name="repeat.yearly.onThe.which"
      className="form-control"
      value={onThe.which}
      onChange={event => handleChange(event)}
    >
      <option value="First">First</option>
      <option value="Second">Second</option>
      <option value="Third">Third</option>
      <option value="Fourth">Fourth</option>
      <option value="Last">Last</option>
    </select>

    <select
      name="repeat.yearly.onThe.day"
      className="form-control"
      value={onThe.day}
      onChange={event => handleChange(event)}
    >
      {days.map(day => <option key={day} value={day}>{day}</option>)}
    </select>

    of

    <select
      name="repeat.yearly.onThe.month"
      className="form-control"
      value={onThe.month}
      onChange={event => handleChange(event)}
    >
      {months.map(month => <option key={month} value={month}>{month}</option>)}
    </select>

  </div>
);
RepeatYearlyOnThe.propTypes = {
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  onThe: PropTypes.shape({
    which: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
    month: PropTypes.oneOf(months).isRequired,
    day: PropTypes.oneOf(days).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatYearlyOnThe;
