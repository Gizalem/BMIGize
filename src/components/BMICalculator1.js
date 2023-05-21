import React, { useState } from 'react';
import BMIForm from './BMIForm';
import BmiResult from './BmiResult';

const BMICalculator1 = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const bmi = weight / (height * height);
      setBMI(bmi.toFixed(2));
    }
  };

  return (
    <div>
      <BMIForm
        weight={weight}
        height={height}
        setWeight={setWeight}
        setHeight={setHeight}
        calculateBMI={calculateBMI}
      />
{/* here bmi && is added with the curly brass so that the BMIresult will be displayd if only there is a valid bmi result */}
      {bmi && <BmiResult bmi={bmi} />} 
    </div>
  );
};

export default BMICalculator1;
