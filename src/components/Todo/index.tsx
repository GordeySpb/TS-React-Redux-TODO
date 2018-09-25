import React from 'react';
import styled from 'styled-components';

import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { IProps, IState, SProps } from './type';

const StyledSpan = styled.span<SProps>`
  margin-right: auto;
  ${({ completed }) => (completed
    ? `text-decoration: line-through;
        flex: 1;
        color: lightgray;
      `
    : '')
}
`;

const StyledForm = styled.form`
  display: flex;
  font-size: 1rem;
  padding: .85em;
  border-top: 1px solid rgba(0,0,0,.1);
  align-items: center;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 8px;
  outline: 1px solid #61dafb;
  border: none;
`;

const StyledTodoCompleted = styled.div<{completed: boolean}>`
  transition: color .2s;
  display: flex;
  font-size: 1rem;
  border-top: 1px solid rgba(0,0,0,.1);
  background-color: #fff;
  -webkit-user-select: none;
  user-select: none;
  padding: 1em;
  align-items: center;
  ${({ completed }) => (completed
    ? `
        flex: 1;
        color: lightgray;
      `
    : '')
}
}
`;

const StyledButton = styled(Button)<{completed: boolean}>`
  ${({ completed }) => (completed
    ? `
    background-color: #ddd;
    color: #fff;
    &:hover
      cursor pointer;
      background-color: #cecaca;
      text-decoration: none;
      `
    : '')
}
`;

export class Todo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isEditing: false,
    };
  }

  private textInput = React.createRef<HTMLInputElement>();

  // tslint:disable-next-line:max-line-length
  handleSubmit = (event: React.FormEvent<HTMLFormElement>| React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // const { onEdit, id } = this.props;
    // const title = this.textInput.current.value;
    // console.log(title)
  }

  handleToggle = () => {
    // const { onToggle, id } = this.props;
    // onToggle(id);
  }

  handleEdit = () => {
    this.setState({ isEditing: true });
  }

  handleDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id);
  }

  renderDisplay = () => {
    const { completed } = this.props;
    const { title } = this.props;

    return(
      <div>
        <StyledTodoCompleted completed={completed}>
          <Checkbox onChange={this.handleToggle} completed={completed} />
          <StyledSpan completed={completed}>{title}</StyledSpan>
          <StyledButton name="Edit" onClick={this.handleEdit} completed={completed} />
          <StyledButton name="Delete" onClick={this.handleDelete} completed={completed} />
        </StyledTodoCompleted>
      </div>
    );
  }

  renderForm = () => {
    const { title } = this.props;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledInput type="text" ref={() => this.textInput} defaultValue={title} />
        <Button name="Save" onClick={this.handleSubmit} />
      </StyledForm>
    );
  }

  render () {
    const { isEditing } = this.state;

    return isEditing ? this.renderForm() : this.renderDisplay();
  }
}
