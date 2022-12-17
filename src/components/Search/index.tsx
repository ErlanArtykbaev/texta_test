import React from 'react';

import { ISearchProps } from './types';

const Search = (props: ISearchProps): JSX.Element => (
  <input
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
  />
);

export default Search;
