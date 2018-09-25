import { connect, MapStateToProps } from 'react-redux';

import { Spiner } from '../../components/Spiner';

import { IStore } from '../../types/store';
import { FromStore } from './types';

const mapStateToProps: MapStateToProps<FromStore, {}, IStore> = ({ spiner }) => ({ spiner });

export const SpinerContainer = connect(mapStateToProps)(Spiner);
