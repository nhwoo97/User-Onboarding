import React, { useState, useEffect } from 'react';
import './App.css';
import User from './User'
import UserForm from './UserForm'
import axios from 'axios'
import formSchema from './FormSchema'
import * as yup from 'yup'

const initialFormValues = {
  first_name: '',
  email: '',
  password:'',
  terms: {
    yes:false
  }
}
const initialFormErrors = {
  first_name: '',
  email: '',
  password:'',
}
const initialEmployees = []
const initialDisabled = true

function App() {

//   const foo={
//     foo:'bar',
//   }
//   axios.post('https://reqres.in/api/users', foo)
//   .then(res => {
//       console.log(res)
//   })
// axios.get('https://reqres.in/api/users')
// .then(res => {
//   console.log(res)
// })

const [employees, setEmployees] = useState(initialEmployees)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const getEmployees = () => {
  axios.get('https://reqres.in/api/users')
  .then(res => {
    setEmployees(res.data.data)
    console.log(res)
  })
  .catch(err =>{
    console.log(err)
  })
}

const postNewEmployee = newEmployee => {
  axios.post('https://reqres.in/api/users', newEmployee)
  .then(res => {
    setEmployees([...employees, res.data])
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    setFormValues(initialFormValues)
  })
}

const inputChange = (name,value) => {
  yup
  .reach(formSchema, name)
  .validate(value)
  .then(valid => {
    setFormErrors({
      ...formErrors,
      [name]: ""
    })
  })
  .catch(err => {
    setFormErrors({
      ...formErrors,
      [name]:err.errors[0]
    })
  })
  setFormValues({
    ...formValues,
    [name]:value
  })

}

const checkboxChange = (name, isChecked) => {
  setDisabled(!isChecked)
  setFormValues({
    ...formValues,
    terms: {
      ...formValues.terms,
      [name]: isChecked,
    }
  })
}

const submit = () =>{
  const newEmployee ={
    first_name: formValues.first_name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: Object.keys(formValues.terms).filter(term => formValues[term])
  }
  postNewEmployee(newEmployee)
}

useEffect( () => {
  getEmployees()
},[] )

useEffect( () => {
  formSchema.isValid(formValues)
  .then(valid => {
    
  },[formValues])
})

  return (
    <div className="container">
        <UserForm
        values={formValues}
        inputChange={inputChange}
        checkBoxChange={checkboxChange}
        submit= {submit}
        disabled={disabled}
        errors={formErrors}
        >
        </UserForm>
        {
        employees.map(emp => {
          return (
            <User key={emp.id} details={emp}/>
          )
        })
        }
    </div>
  );
}

export default App;
