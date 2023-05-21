import React from 'react';

const BmiResult = ({ bmi }) => {
  let message = '';

  if (bmi < 18.5) {
    message = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    message = 'Normal weight';
  } else {
    message = 'Overweight';
  }

  return (
    <div>
      <h3>BMI Result</h3>
      <p>BMI: {bmi}</p>
      <p>Category: {message}</p>
    </div>
  );
};

export default BmiResult;
