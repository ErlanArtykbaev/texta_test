import { ECustomerType } from 'store/customer/types';

export const customerTypeMapper: Record<string, string> = {
  [ECustomerType.INDIVIDUAL]: 'Физ. лицо',
  [ECustomerType.COMPANY]: 'Юр. лицо'
};

export const getCustomerTypeDisplay = (type: ECustomerType): string => {
  if (type in customerTypeMapper) return customerTypeMapper[type];
  return type;
};
