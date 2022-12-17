import { EStorageKeys } from 'configuration/types/storageKeys';
import { TOKEN_EXPIRATION_DAYS, ISetCookiesOptions, IParsedCookie } from 'configuration/cookie';

export function getStorageData<T>(key: EStorageKeys | string): T | undefined {
  if (typeof localStorage === 'undefined') return;
  if (localStorage.getItem(key) === null) return;
  try {
    return JSON.parse(localStorage.getItem(key) || '{}') as T;
  } catch (err) {
    return;
  }
}

export function setStorage(key: EStorageKeys | string, data: unknown): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(data));
}

export const clearStorageData = (): void => {
  if (typeof localStorage === 'undefined') return;
  localStorage.clear();
};

export function removeStorageItem(key: EStorageKeys | string): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(key);
}

export function setSessionStorage(key: EStorageKeys | string, data: unknown): void {
  if (typeof sessionStorage === 'undefined') return;
  sessionStorage.setItem(key, JSON.stringify(data));
}

export function getSessionStorageData<T>(key: EStorageKeys | string): T | undefined {
  if (typeof sessionStorage === 'undefined') return;
  try {
    return JSON.parse(sessionStorage.getItem(key) || '{}') as T;
  } catch (err) {
    console.error(err);
  }
}

export function removeSessionStorageItem(key: EStorageKeys | string): void {
  if (typeof sessionStorage === 'undefined') return;
  sessionStorage.removeItem(key);
}

export const setCookie = (name: string, value: string, options?: ISetCookiesOptions): void => {
  if (typeof document === 'undefined') return;
  const { days = TOKEN_EXPIRATION_DAYS, path = '/' } = options || {};
  const date = new Date();
  const expiredAt = days * 24 * 60 * 60 * 1000;
  date.setTime(date.getTime() + expiredAt);
  const expires = `; expires=${date.toUTCString()}`;

  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=${path}`;
};

export const getCookie = (name: string): string | undefined => {
  if (typeof document === 'undefined') return;

  const parsed: Array<IParsedCookie> = parseCookie(document.cookie);
  const target: IParsedCookie | undefined = parsed.find(item => item.name === name);

  if (!target) return;
  return decodeURIComponent(target.value);
};

export const parseCookie = (cookie: string): Array<IParsedCookie> =>
  cookie.split(/\s/).map(item => {
    const row = item.replace(';', '');
    const [name, value] = row.split('=');
    return { name, value };
  });


export const removeCookie = (name: string, options?: ISetCookiesOptions): void => {
  if (typeof document === 'undefined') return;

  const { path } = options || {};
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
};
