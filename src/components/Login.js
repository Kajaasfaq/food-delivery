// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

const Login = () => (
  <div className='bg-body-colour w-[100%] h-[780px] '>
    <h1 className='text-2xl text-black text-center p-12'>Heartily welcome to Food Express!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex items-center gap-5 justify-center'>
          <label for="email" className=''>Email Id:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label for="password"> Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting} className='cursor-pointer hover:text-slate-600 hover:underline border-2 bg-white'>Submit</button>
          <Link to="/"><button className='cursor-pointer hover:text-slate-600 hover:underline border-2 bg-white'>Back to Home</button></Link>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login;