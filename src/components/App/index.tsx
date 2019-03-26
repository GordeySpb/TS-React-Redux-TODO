import * as React from 'react';
import styled from 'styled-components';

import { ErrorConatiner } from '../../containers/ErrorContainer';
import { Header } from '../Header';
import { FormContainer } from '../../containers/FormContainer';
import { SpinerContainer } from '../../containers/SpinerContainer';
import  { ListContainer }  from '../../containers/ListContainer/index';

const StyledMain = styled.main`
  background: #fff;
  width: 700px;
  margin: 50px auto;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
`;

import './App.css';

export const App = () => {
  return (
    <StyledMain>
      <Header title="TypeScript-TODO" />
      <ErrorConatiner />
      <SpinerContainer />
      <ListContainer />
      <FormContainer />
    </StyledMain>
  );
};
