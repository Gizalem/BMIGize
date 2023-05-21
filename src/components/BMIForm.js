import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/button';


const BMIForm = ({ weight, height, setWeight, setHeight, calculateBMI }) => {
  // return (
  //   <div className='form'>
  //     <div>
  //       <label>Weight (kg):</label>
  //       <input 
  //          type="number" 
  //          value={weight} 
  //          onChange={(e) => setWeight(e.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <label>Height (m):</label>
  //       <input
  //         type="number"
  //         value={height}
  //         onChange={(e) => setHeight(e.target.value)}
  //       />
  //     </div>
  //     <button onClick={calculateBMI}>Calculate BMI</button>
  //   </div>
  return (
    <div>
    <Form className='form'>
      <Form.Group className="mb-1">
        <Form.Label>Weight (Kg)</Form.Label>
        <Form.Control type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
         
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Label>Height (m)</Form.Label>
        <Form.Control type="number" value={height} onChange={(e) => setHeight(e.target.value)}/>
      </Form.Group>
      
      <Button className='button' variant="success" onClick={calculateBMI}>
        Calculate BMI
      </Button>
    </Form>
    </div>
  );
};

export default BMIForm;
