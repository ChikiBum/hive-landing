import * as Yup from 'yup';

export const getEmailValidator = () =>
  Yup.string()
    .strict(true)
    .email()
    .trim('Spaces before and after text is not allowed')
    .required('Email is required.');
