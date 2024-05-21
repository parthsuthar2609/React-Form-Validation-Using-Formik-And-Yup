import React, { useState } from 'react';
import { useFormik, validateYupSchema } from 'formik';
import { signupSchema } from './schemas';

const initialValues = {
    name : "",
    email : "",
    password : "",
    verify : "",
}

const Forms = () => {
    const {
        values,
        errors,
        handleBlur,
        handleSubmit,
        handleChange
    } = useFormik({
    initialValues : initialValues,
    validationSchema : signupSchema,
    onSubmit : (values) =>{
       console.log(values)
    }
   });
console.log(errors)


  return (
    <div className='flex justify-center min-h-screen items-center bg-gray-100'>
      <form
        className='bg-white p-6 rounded shadow-stone-950 w-full max-w-sm border-spacing-4'
        onSubmit={handleSubmit}
      >
        <div className='text-3xl text-cyan-500 text-center mb-3'>Welcome</div>
        <div className='mb-4'>
          <label htmlFor='name' className='block font-medium text-gray-700'>
            Name:<sup className='text-lg text-red-600'>*</sup>
          </label>
          <input
            type='text'
            name='name'
            className='mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm'
            placeholder='Enter Your Name'
            autoComplete='off'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className='text-lg text-red-600'>{errors.name}</p>
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='block font-medium text-gray-700'>
            Email:<sup className='text-lg text-red-600'>*</sup>
          </label>
          <input
            type='email'
            name='email'
            className='mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm'
            placeholder='Enter Your Email'
            autoComplete='off'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className='text-lg text-red-600'>{errors.email}</p>
        </div>

        <div className='mb-4'>
          <label htmlFor='password' className='block font-medium text-gray-700'>
            Password:<sup className='text-lg text-red-600'>*</sup>
          </label>
          <input
            type='password'
            name='password'
            className='mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm'
            placeholder='Enter Password'
            autoComplete='off'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur} 
          />
          <p className='text-lg text-red-600'>{errors.password}</p>
        </div>

        <div className='mb-4'>
          <label htmlFor='verify' className='block font-medium text-gray-700'>
            Verify Password:<sup className='text-lg text-red-600'>*</sup>
          </label>
          <input
            type='password'
            name='verify'
            className='mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm'
            placeholder='Please Enter Password For Verify'
            autoComplete='off'
            value={values.verify}
            onChange={handleChange}
            onBlur={handleBlur}
          />
             <p className='text-lg text-red-600'>{errors.verify}</p>
        </div>

        <button
          type='submit'
          className='bg-cyan-500 p-2 rounded shadow-md w-full mt-5 font-medium text-gray-700'
        >
          Register
        </button>
        <div className='mt-4'>
          <h6>
            The <sup className='text-lg text-red-600'>*</sup> Field Must be Required
          </h6>
        </div>
      </form>
    </div>
  );
};
export default Forms;
