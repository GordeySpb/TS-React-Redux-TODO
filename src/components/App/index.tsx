import * as React from 'react';
import styledComponents from 'styled-components';

import { ERRORCONTAYNER } from '../../containers/ErrorContainer';
import { HEADER } from '../Header';

const STYLEDMAIN = styledComponents.main`
  background: #fff;
  width: 700px;
  margin: 50px auto;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
`;

import './App.css';

export const APP = () => {
  return (
    <STYLEDMAIN>
      <HEADER title="TypeScript-TODO" />
      <ERRORCONTAYNER />
    </STYLEDMAIN>
  );
};
