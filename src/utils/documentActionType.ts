import { EDocumentAction } from 'store/documents/types';

import safeGet from 'utils/safeGet';

export const documentActionTypeLabels = {
  [EDocumentAction.REISSUE]: 'Переоформить',
  [EDocumentAction.RENEWAL]: 'Пролонгация',
  [EDocumentAction.SUB_RENT]: 'Субаренда',
  [EDocumentAction.COMPLAINTS]: 'Претензионная работа',
};

export const rentalAgreementActionTypeLabels = {
  [EDocumentAction.REISSUE]: 'Переоформление',
  [EDocumentAction.RENEWAL]: 'Пролонгация',
  [EDocumentAction.SUB_RENT]: 'Субаренда',
};

export const getDocumentActionDisplay = (type: EDocumentAction): string =>
  safeGet(documentActionTypeLabels, type, type.toString());

export const getRentalAgreementActionDisplay = (type: EDocumentAction): string =>
  safeGet(rentalAgreementActionTypeLabels, type, type.toString());
