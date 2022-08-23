import * as Yup from 'yup';

export const getPriceValidator = () =>
  Yup.object().shape({
    minPrice: Yup.number(),
    maxPrice: Yup.number().moreThan(
      Yup.ref('minPrice'),
      'Minimum must be less than maximum',
    ),
  });
