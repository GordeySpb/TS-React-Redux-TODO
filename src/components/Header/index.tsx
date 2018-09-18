import * as React from 'react';
import styled from 'styled-components';

import { IProps } from './types';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: white;
  background-color: #61dafb;
  text-align: center;
`;

const StyledH1 = styled.h1`
  display: inline-block;
  color: #fff;
  margin: 1rem auto;
`;

export const Header: React.SFC<IProps> = ({ title }) => (
  <StyledHeader>
    <StyledH1>{title}</StyledH1>
  </StyledHeader>
);
