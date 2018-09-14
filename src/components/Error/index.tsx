import * as React from 'react';
import styledComponents from 'styled-components';

import { IProps } from './types';

const STYLEDDIV = styledComponents.div`
  text-align: center;
`;

const ERROR: React.SFC<IProps> = ({ error }) =>
  (error ? <STYLEDDIV>Error try again</STYLEDDIV> : null);

export { ERROR };
