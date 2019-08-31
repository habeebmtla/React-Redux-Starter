import ActionTypes from '../constants/AppConstants';

const initialState = {
	users:[],
  loading: false
}

export default function sample(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.SET_INPUTS:
    return Object.assign({},state, action.inputs) ;
  default:
    return state;
  }
}