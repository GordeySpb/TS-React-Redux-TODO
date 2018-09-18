import { connect, MapStateToProps } from 'react-redux';

import { Error } from '../../components/Error';

import { IStore } from '../../types/store';
import { FromStore } from './types';

const mapStateToProps: MapStateToProps<FromStore, {}, IStore> = ({ error }) => ({ error });

export const ErrorConatiner = connect(mapStateToProps)(Error);
