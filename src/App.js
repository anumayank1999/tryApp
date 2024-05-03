import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';
import React  from 'react';

import { vale } from "./schema";
//import sql from sql;
import axios from 'axios';


function App() {

  

  return (
    <div className="App">
    
      <header className="App-header">
        hi
        <h1>
          Welcome to Claims Form!!!
        </h1>
        
        <Forum />
        <a
          className="App-link"
          href="www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >More about us!!!
        </a>
      </header>
    </div>
  );
}

const initialValues ={
  PolicyNo:"",
  AGE:"",
  select_car:"",
  Police_avail:"No",
  Summary:"",
};





const Forum = () => {
  

  const {values, errors, touched ,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: vale,
    onSubmit: (values, action) => {
      
      console.log(values);
     /*    -----------------------------------------------to save in localhost Mysql using node need to run node at this -> C:\Users\INORI\Downloads\ML\ProjectForm\backend
      fetch('http://localhost:3000/store-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(values),
        
        //body: values
      }).then(function(response) {
        console.log(response.json())
        return response.json();
      });
      console.log("values");
      console.log(values);*/
      
      /*------------------- to store on mongodb nosql format online cloud using mom gmail created account on atlas mongodb account used postman to test
      */
      var data = JSON.stringify({
        "collection": "api",
        "database": "apitry",
        "dataSource": "Cluster0",
        "document": {
            "PolicyNo": values.PolicyNo,
            "AGE":values.AGE,
            "select_car":values.select_car,
            "Police_avail":values.Police_avail,
            "Summary":values.Summary

        }
    });
    
    var config = {
      method: 'post',
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-xvirqiy/endpoint/data/v1/action/insertOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'q1Z4vPG82gyygd7tbjfN1v7bng8soWJ9ZGh6KYbLBOMqREvzzo8wfeeEAKfYkqSh',
      },
      data: data
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
      
      action.resetForm();
      
    },
    
  });
  console.log(errors)
  return (
    <> <form onSubmit={handleSubmit}>
        <label htmlFor='PolicyNo'>
          Policy No. <input value={values.PolicyNo} onChange={handleChange} onBlur={handleBlur} type="text" name='PolicyNo' placeholder='Policy No' id='PolicyNo'/>
          {errors.PolicyNo && touched.PolicyNo ? (
            <p>{errors.PolicyNo}</p>):null}
          </label>
          <label htmlFor='age'>
        {"\t"} Age <input value={values.AGE} onChange={handleChange} onBlur={handleBlur}
        type="Number" name='AGE' placeholder='AGE' id='age'/>
        </label>
        <br/>
        <label htmlFor='CarType'>Type of Car 
        {/*<input value={values.select_car} onChange={handleChange} onBlur={handleBlur}
        type="text" name='select_car' placeholder='select_car'id='CarType'/>*/}
        <select name="select_car" placeholder='select_car' id='CarType' value={values.select_car} onChange={handleChange} onBlur={handleBlur}>
          <option value="No Selection of Car">Select a Car</option>
          <option value="Sedan" >Sedan</option>
          <option value="Hatchback">Hatchback</option>
          <option value="SUV">SUV</option>
        </select>
        </label>
        <label htmlFor='Police'>{"\t"} Police Involved 
        {/*<input value={values.Police_avail} onChange={handleChange} onBlur={handleBlur}
        name='Police_avail' type="text" placeholder='Police_avail' id='Police'/>
        */}</label>
        {/*<select name="Police_avail" placeholder='Police_avail' id='Police' value={values.Police_avail} onChange={handleChange} onBlur={handleBlur}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
          <option value="NA">Not Sure</option>
        </select>*/}
        <span name="Police_avail" placeholder='Police_avail' id='Police' value={values.Police_avail} onChange={handleChange} onBlur={handleBlur}>
          <input type="radio" id="Police" name="Police_avail" value="No" defaultChecked/>
          <label for="Police">No</label>
          <input type="radio" id="Police" name="Police_avail" value="Yes"/>
          <label for="Police">Yes</label><br/>
        </span>
        
        
        <label htmlFor='Detail'>Summary <input value={values.Summary} onChange={handleChange} onBlur={handleBlur}
        className='txt' name='Summary' type="textarea" placeholder='Summary' id='Detail'/>
        </label>
        <button type="submit" disabled={values.PolicyNo.length === 0}>Report</button>
        
        
        </form></>
  )
}




export default App;
