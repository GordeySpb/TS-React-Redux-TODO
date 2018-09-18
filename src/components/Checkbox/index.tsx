import * as React from 'react';
import styled from 'styled-components';

import { IProps } from './types';

const StyledInput = styled.input`
  margin: 0px 15px;
  height: 15px;
  width: 15px;
    &:hover {
      cursor: pointer;
    }
`;

export const Checkbox: React.SFC<IProps> = ({ completed, onChange }) => (
  <StyledInput type="checkbox" onClick={onChange}  checked={completed ? true : false} />
);
