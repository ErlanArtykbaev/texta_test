import { ObjectShape } from 'yup/lib/object';

import { stringRequiredWithEmail, stringYupRequired } from 'utils/validation';

export const schema: ObjectShape = {
  username: stringRequiredWithEmail,
  password: stringYupRequired,
};

