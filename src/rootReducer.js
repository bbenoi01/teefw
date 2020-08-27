import { combineReducers } from 'redux';
import AppReducer from './Reducers/appReducer';

const rootReducer = combineReducers({
    app: AppReducer
});

export default rootReducer;