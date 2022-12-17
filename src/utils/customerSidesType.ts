import { ECustomerSides } from 'store/documents/types';

import safeGet from 'utils/safeGet';

export const customerSidesLabels = {
  [ECustomerSides.ONE_BY_ONE]: '1*1',
  [ECustomerSides.ONE_BY_TWO]: '1*2',
  [ECustomerSides.TWO_BY_ONE]: '2*1',
  [ECustomerSides.TWO_BY_TWO]: '2*2',
};


export const getCustomerSideDisplay = (type: ECustomerSides): string =>
  safeGet(customerSidesLabels, type, type.toString());
