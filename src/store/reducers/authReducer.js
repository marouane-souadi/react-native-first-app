import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGIN_USER,
  LOGIN_USER_FAIL
} from '../actionTypes';

const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	loading: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.email };
		case PASSWORD_CHANGED:
			return { ...state, password: action.password };
    case LOGIN_USER:
      return { ...state, loading: true }
    case LOGIN_USER_FAIL:
      return { ...state, error: action.error, loading: false }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.user }
    case LOGOUT_USER:
      return { ...state, user: null }
		default:
			return state;
	}
};
