import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/min/locales';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { getTimeZoneAbbreviation } from '../../utils/timezone';
import '../OnDate.css';

const EndOnDate = ({
  onDate: {
    date,
  },
  handleChange,
}) => {
  const dateObj = new Date(Date.parse(date));

  return (
    <div className="EndDatePicker">
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
              name: 'end.onDate.date',
            },
          };

          handleChange(editedEvent);
        }}
      />
      <span className="EndDatePicker-timezone">{getTimeZoneAbbreviation(dateObj)}</span>
    </div>
  );
};

EndOnDate.propTypes = {
  onDate: PropTypes.shape({
    date: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EndOnDate;
