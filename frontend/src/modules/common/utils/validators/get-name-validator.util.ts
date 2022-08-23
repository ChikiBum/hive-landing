import * as Yup from 'yup';

export const getNameValidator = (name = 'Name') =>
  Yup.string()
    .required(`${name} is required.`)
    .strict(true)
    .trim('Spaces before and after text is not allowed')
    .min(3, `${name} is too short.`)
    .max(100, `${name} is too long`);
