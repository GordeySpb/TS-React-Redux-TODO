import { connect, MapStateToProps } from 'react-redux';

import { ERROR } from '../../components/Error';

import { IStore } from '../../types/store';
import { FromStore } from './types';

const mapStateToProps: MapStateToProps<FromStore, {}, IStore> = ({ error }) => ({ error });

export const ERRORCONTAYNER = connect(mapStateToProps)(ERROR);
