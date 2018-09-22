import React from 'react';

import { IProps } from './type';
import { Todo } from '../Todo';

export const List: React.SFC<IProps> = ({ todos, onDelete, onEdit, onToggle }) => (
  <section>
    {todos.length
      ? todos.map(({ id, title, completed }) => (
        <Todo
          key={id}
          id={id}
          title={title}
          completed={completed}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))
      : null
    }
  </section>
);
