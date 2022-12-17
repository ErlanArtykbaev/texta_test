import { ChangeEvent } from 'react';

export interface ISearchProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
