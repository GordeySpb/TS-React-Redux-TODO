import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators, Dispatch, Action } from 'redux';

import { DispatchStore } from './types.d';
import { Form } from '../../components/Form';
import { addTodo } from '../../enums/actionsCreators';

const mapDispatchToProps: MapDispatchToProps<DispatchStore, {}> = (dispatch: Dispatch) => (
  bindActionCreators<DispatchStore, Action>({ addTodo }, dispatch)
);

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
