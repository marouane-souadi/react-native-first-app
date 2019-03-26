import {
  EMPLOYEE_FIELD_UPDATE,
  EMPLOYEE_FORM_RESET,
  EMPLOYEES_FETCH_SUCCESS
} from '../actionTypes';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';



export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_FIELD_UPDATE,
    payload: { prop, value }
  }
}

export const createEmployee = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        Actions.pop();
        dispatch(resetEmployeeForm());
      });
  }
};

const resetEmployeeForm = () => {
  return {
    type: EMPLOYEE_FORM_RESET
  }
}

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch(employeesFetchSuccess(snapshot.val()))
      })
  }
}

const employeesFetchSuccess = (payload) => {
  return {
    type: EMPLOYEES_FETCH_SUCCESS,
    payload
  }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        Actions.pop();
        dispatch(resetEmployeeForm());
      });
  }
};

export const employeeDelete = (uid) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
        dispatch(resetEmployeeForm());
      });
  }
};