import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { FromStore, DispatchStore } from './types';
import { IStore } from '../../types/store';

import { List } from '../../components/List';
import { deleteTodo, updateTodo, toggleTodo } from '../../enums/actionsCreators';

// tslint:disable-next-line:max-line-length
const mapStateToProps: MapStateToProps<FromStore, {}, IStore> = ({ todos, spiner }) => ({ todos, spiner });

const mapDispatchToProps: MapDispatchToProps<DispatchStore, {}> = (dispatch: Dispatch) => (
  // tslint:disable-next-line:max-line-length
  bindActionCreators<DispatchStore, any>({ onDelete: deleteTodo, onEdit: updateTodo, onToggle: toggleTodo }, dispatch)
);

export const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
