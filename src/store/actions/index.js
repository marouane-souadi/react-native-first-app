import { SELECT_LIBRARY } from '../actionTypes';

export const selectLibrary = (id) => {
  return {
    type : SELECT_LIBRARY,
    id
  }
}

export * from './authActions';
export * from './employeeActions';