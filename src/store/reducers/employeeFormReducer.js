import { EMPLOYEE_FIELD_UPDATE, EMPLOYEE_FORM_RESET } from '../actionTypes';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FIELD_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };

    case EMPLOYEE_FORM_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}