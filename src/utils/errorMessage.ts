import { AxiosError } from 'axios';

export interface IErrorMessage {
  message: string;
  code: number;
}

const errorMessage = (error?: AxiosError | DOMException | null | string | unknown): IErrorMessage => {
  if (!error) return { message: 'Неизвестная ошибка', code: 500 };
  if (error instanceof DOMException) {
    console.error('Внутреняя ошибка JavaScript', error);
    return { message: 'Внутреняя ошибка JavaScript', code: 700 };
  }
  if (typeof error === 'string') return { message: error, code: 400 };
  const { response, message } = error as AxiosError;
  if (![400, 401].includes(response?.status || 0)) {
    return { message, code: response?.status || 500 };
  }
  const errors: Record<string, string | string[]> = response?.data || {};
  if ('detail' in errors) {
    return {
      message: (
        Array.isArray(errors.detail)
          ? errors.detail.join(', ')
          : errors.detail
      ) || '',
      code: response?.status || 400
    };
  }
  let result = 'Ошибка валидации: \n';
  for (const field of Object.keys(errors)) {
    result += `${field}: ${errors[field]}\n`;
  }
  return { message: result, code: response?.status || 400 };
};

export default errorMessage;
