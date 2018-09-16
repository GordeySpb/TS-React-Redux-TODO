import * as React from 'react';
import styledComponents from 'styled-components';

import { IProps } from './types.d';

const STYLEDBUTTON = styledComponents.button`
  font-weight: bold;
  font-size: 15px;
  border-radius: 3px;
  background-color: #61dafb;
  margin-left: 10px;
  border: none;
  height: 25px;
  width: 60px;
  color: white;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
    &:hover {
      cursor: pointer;
      background-color: #35cef4;
    }
`;

export const BUTTON: React.SFC<IProps> = ({ name }) => (<STYLEDBUTTON>{name}</STYLEDBUTTON>);
