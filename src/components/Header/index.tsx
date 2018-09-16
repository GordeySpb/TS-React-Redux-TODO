import * as React from 'react';
import styledComponents from 'styled-components';

import { IProps } from './types';

const STYLEDHEADER = styledComponents.header`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: white;
  background-color: #61dafb;
  text-align: center;
`;

const STYLEDH1 = styledComponents.h1`
  display: inline-block;
  color: #fff;
  margin: 1rem auto;
`;

export const HEADER: React.SFC<IProps> = ({ title }) => (
  <STYLEDHEADER>
    <STYLEDH1>{title}</STYLEDH1>
  </STYLEDHEADER>
);
