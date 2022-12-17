import { ETransaction } from 'store/documents/types';

import safeGet from 'utils/safeGet';

export const transactionTypeLabel: Record<string, string> = {
  [ETransaction.INHERITANCE]: 'Наследство',
  [ETransaction.GIFT]: 'Дарение',
  [ETransaction.SELL_BY]: 'Купля-продажа',
  [ETransaction.NOTARIZED]: 'Нотариально',
  [ETransaction.RENT]: 'Аренда'
};

export const getTransactionTypeDisplay = (type: ETransaction): string =>
  safeGet(transactionTypeLabel, type, type.toString());
