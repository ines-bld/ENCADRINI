import React from 'react';
import validate from './ValidateInfo';
import useForm from './UseForm';


const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='email'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Mot de passe </label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Mot de passe '
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
           <a href='#'>Mot de passe oublié?</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;
