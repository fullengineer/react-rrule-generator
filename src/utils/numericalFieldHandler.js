import { isNaN } from 'lodash';

const numericalFieldHandler = callback => (event) => {
  // Convert input from a string to a number
  const inputNumber = +event.target.value;
  // Check if is a number and is less than 1000
  if (isNaN(inputNumber) || inputNumber >= 1000) return;

  const editedEvent = { target: { value: +event.target.value, name: event.target.name } };
  callback(editedEvent);
};

export default numericalFieldHandler;
