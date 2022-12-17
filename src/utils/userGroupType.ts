import { EUserGroup } from 'store/users/types';

import safeGet from 'utils/safeGet';

export const userGroupTypeLabel: Record<string, string> = {
  [EUserGroup.ADMIN]: 'Администратор',
  [EUserGroup.VIEWER]: 'Смотритель',
  [EUserGroup.SUPERVISOR]: 'Модератор',
};

export const getUserGroupTypeDisplay = (type: EUserGroup): string =>
  safeGet(userGroupTypeLabel, type, type ? type.toString() : '');
