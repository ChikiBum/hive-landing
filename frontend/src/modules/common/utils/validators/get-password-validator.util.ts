import * as Yup from 'yup';
import { PASSWORD_MATCH } from '../../constants/regex.const';

export const getPasswordValidator = () =>
  Yup.string()
    .strict(true)
    .required('Password is required')
    .trim('Spaces before and after text is not allowed')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .max(100, 'Password is long short - should be 100 chars maximum.')
    // eslint-disable-next-line max-len
    .matches(
      PASSWORD_MATCH,
      'The password must contain a digit, an uppercase and lowercase letter, and a special character (!@#$%^&)',
    );

export const getNonRequiredPasswordValidator = () =>
  Yup.string()
    .strict(true)
    .trim('Spaces before and after text is not allowed')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .max(100, 'Password is long short - should be 100 chars maximum.')
    // eslint-disable-next-line max-len
    .matches(
      PASSWORD_MATCH,
      'The password must contain a digit, an uppercase and lowercase letter, and a special character (!@#$%^&)',
    );
