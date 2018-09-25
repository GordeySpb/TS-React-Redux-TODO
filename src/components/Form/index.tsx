import * as React from'react';
import { IProps, IState } from './types';

import { Button } from '../Button';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  background-color: #FAFAFA;
  border-top: 1px solid rgba(0,0,0,.1);
  padding: 15px;
  align-items: center;
`;

const StyledInput = styled.input`
  flex: 1;
  outline: none;
  transition: all .2s;
  outline: 1px solid #61dafb;
  padding: 8px;
  border: none;
`;

export class Form extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      title: '',
    };

  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value;
    this.setState({ title });
  }

  private handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { title } = this.state;
    const { addTodo } = this.props;

    if (title) {
      addTodo(title);
      this.setState({ title: '' });
    }
  }

  render() {
    const { title } = this.state;

    return(
      <StyledForm>
        <StyledInput
          type="text"
          placeholder="Enter task"
          onChange={this.handleChange}
          value={title}
         />
        <Button name="Add" onClick={this.handleSubmit} />
      </StyledForm>
    );
  }
}
