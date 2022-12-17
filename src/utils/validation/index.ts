import * as yup from 'yup';
import { ObjectShape } from 'yup/lib/object';

import { TFormValues } from 'store/forms/types';

export const numberYup = yup.number();
export const stringYup = yup.string().trim();
export const selectStringYup = yup
  .array()
  .min(1, 'Поле обязательна к заполнению');
export const selectStringYupRequired = selectStringYup.required('Поле обязательна к заполнению');

export const stringYupRequired = stringYup.required('Поле обязательна к заполнению');
export const stringRequiredWithEmail = stringYupRequired.email('Введите корректный email');
export const stringYupPassword = stringYupRequired
  .min(6, 'Минимальная длина пароля должна быть 6 символов')
  .max(16, 'Максимальная длина пароля должна быть 16 символов')
  .matches(/[a-zA-Z0-9]/, 'Пароль может включать в себя только латинские буквы и цифры');


export const executeValidation = (
  schema: ObjectShape,
  values: TFormValues
): Promise<null | Record<string, string[]>> =>
  new Promise((resolve, reject) => {
    yup
      .object()
      .shape(schema)
      .validate(values, { abortEarly: false })
      .then(reject)
      .catch(resolve);
  });
