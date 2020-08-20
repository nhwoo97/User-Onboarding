import React from "react";

export default function UserForm(props) {
    const {
        values,
        inputChange,
        checkBoxChange,
        submit,
        disabled,
        errors
    } = props;

  const onSubmit = (evt) => {
      evt.preventDefault()
      submit()
  };

  const onInputChange = (evt) => {
    const {name, value} = evt.target
    inputChange(name,value)
  };

  const onCheckboxChange = (evt) => {
      const {name, checked} = evt.target
        checkBoxChange(name, checked)
  };

 
  return (
    <form>
      <div>
        <h2>Add Employee</h2>
        <button onClick={onSubmit} disabled={disabled}>Submit</button>
        <div>
          <div>{errors.first_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div>
        <h4>General Info</h4>
        <label>Name:
          <input value={values.first_name} 
          onChange={onInputChange} 
          name="first_name" 
          type="text">
          </input>
        </label>
        <br/>
        <label>Email:
          <input value={values.email} 
          onChange={onInputChange} 
          name="email" 
          type="text">
          </input>
        </label>
        <br/>
        <label>Password:
          <input value={values.password} 
          onChange={onInputChange} 
          name="password" 
          type="text">
          </input>
        </label>
        <div className='form-group-checkboxes'>
            <label>Terms of Service
                <input 
                type='checkbox'
                name= 'yes'
                checked= {values.terms.yes}
                onChange={onCheckboxChange}>
                </input>
            </label>
        </div>
      </div>
    </form>
  );
}
