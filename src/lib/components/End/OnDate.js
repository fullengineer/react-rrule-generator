import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/min/locales';
import DatePicker from 'react-datepicker';

import { getDateString } from '../../utils/timezone';

const EndOnDate = ({
  onDate: {
    date,
  },
  handleChange,
}) => {
  const dateObj = new Date(Date.parse(date));

  return (
    <div className="EndDatePicker" style={{ position: 'relative' }}>
      <DatePicker
        timeInputLabel="Time:"
        dateFormat={date}
        showTimeInput
        selected={dateObj}
        value={date}
        onChange={(inputDate) => {
          const dateString = getDateString(inputDate);
          const localMoment = moment(dateString, 'YYYY-MM-DD HH:mm:ss').utc().format('lll');
          const editedEvent = {
            target: {
              value: localMoment,
              name: 'end.onDate.date',
            },
          };

          handleChange(editedEvent);
        }}
      />
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
