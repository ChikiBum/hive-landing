const Joi = require('joi');
require('dotenv').config();

const envSchema = {
  // Frontend setup
  REACT_APP_URL: Joi.string().required(),
  REACT_APP_MOCK: Joi.string()
    .pattern(/^(enabled|disabled)+$/)
    .required(),
  REACT_APP_SERVER_URL: Joi.string().required(),
};

const envVariables = process.env;

async function handleValidation() {
  try {
    // eslint-disable-next-line guard-for-in
    for (const key in envSchema) {
      try {
        await envSchema[key].validateAsync(envVariables[key]);
      } catch (e) {
        throw new Error(`⛔️ Validation of : ${key} is undefined! ⛔️`);
      }
    }
    console.log('✅ Success! Env validation was successfully passed! ✅');
  } catch (e) {
    console.log(
      'Environment variables validation failed. Check your dotenv variables:',
    );
    console.error(e);
    process.exit(1);
  }
}

handleValidation();
