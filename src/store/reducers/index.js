import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import selectionReducer from './selectionReducer';
import authReducer from './authReducer';
import employeeFormReducer from './employeeFormReducer';
import employees from './employeeReducer';

export default combineReducers({
  libraries: libraryReducer,
  selectedLibraryId: selectionReducer,
  auth: authReducer,
  employeeForm: employeeFormReducer,
  employees
});