import { 
  EMAIL_CHANGED,  
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actionTypes';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    email
  }
}

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    password
  }
}

export const loginUserSpinner = () => {
  return {
    type: LOGIN_USER,
  }
}

export const loginUser = ({ email, password })=> {
  return dispatch => {
    dispatch(loginUserSpinner());
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        loginSuccess(dispatch, user);
      })
      .catch(err => {
        dispatch(loginFail('Signin failed'));
      })
  };
};

export const signupUser = ({ email, password })=> {
  return dispatch => {
    dispatch(loginUserSpinner());
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        loginSuccess(dispatch, user);
      })
      .catch(err => {
        dispatch(loginFail('Signup failed'));
      })
  };
};

const loginSuccess = (dispatch, user) => {
  dispatch(loginUserSuccess(user));
  Actions.employeeMain();
}


const loginUserSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    user
  }
}

const loginFail = (error) => {
  return {
    type: LOGIN_USER_FAIL,
    error
  }
}

export const logoutUser = () => {
  return dispatch => {
    firebase.auth().signOut();
  }
}