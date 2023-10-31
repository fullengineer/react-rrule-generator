import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/min/locales';
import DatePicker from 'react-datepicker';

import { getDateString } from '../../utils/timezone';

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
          const dateString = getDateString(inputDate);
          const localMoment = moment.utc(dateString, 'YYYY-MM-DD HH:mm:ss').format('lll');
          const editedEvent = {
            target: {
              value: localMoment,
              name: 'start.onDate.date',
            },
          };

          handleChange(editedEvent);
        }}
      />
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
