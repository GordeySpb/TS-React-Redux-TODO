import * as React from 'react';
import styled from 'styled-components';

import { IProps } from './types';

const StyledDiv = styled.div`
  text-align: center;
`;

export const Spiner: React.SFC<IProps> = ({ spiner }) => (
  spiner ? <StyledDiv>Loading</StyledDiv> : null
);
