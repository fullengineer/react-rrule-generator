import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/min/locales';
import DatePicker from 'react-datepicker';

import { getTimeZoneAbbreviation } from '../../utils/timezone';

const StartOnDate = ({
  onDate: {
    date,
  },
  handleChange,
}) => {
  const dateObj = new Date(Date.parse(date));

  return (
    <div className="StartDatePicker" style={{ position: 'relative' }}>
      <DatePicker
        timeInputLabel="Time:"
        dateFormat={date}
        showTimeInput
        selected={dateObj}
        value={date}
        onChange={(inputDate) => {
          const editedEvent = {
            target: {
              value: moment(inputDate).format('lll'),
              name: 'start.onDate.date',
            },
          };

          handleChange(editedEvent);
        }}
      />
      <span className="StartDatePicker-timezone" style={{ position: 'absolute', top: '8px', right: '-64px' }}>{getTimeZoneAbbreviation(dateObj)}</span>
    </div>
  );
};

StartOnDate.propTypes = {
  onDate: PropTypes.shape({
    date: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default StartOnDate;
