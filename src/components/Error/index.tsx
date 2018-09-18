import * as React from 'react';
import styled from 'styled-components';

import { IProps } from './types';

const StyledDiv = styled.div`
  text-align: center;
`;

export const Error: React.SFC<IProps> = ({ error }) => (
  error ? <StyledDiv>Error try again</StyledDiv> : null
);
