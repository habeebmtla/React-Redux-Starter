import ActionTypes from '../constants/AppConstants';

const initialState = {
	name: '',
	users:{loading: true, data: []}
}

export default function sample(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.SET_INPUTS:
    return Object.assign({},state, action.inputs) ;
  case ActionTypes.SET_LOADING_STATUS:
    return Object.assign({},state,{
    	[action.name]:{
    		...state[action.name],
    		loading: action.status
    	}
    }) ;
  case ActionTypes.SET_API_DATA:
    return Object.assign({},state,{
    	[action.name]:{
    		...state[action.name],
    		data: action.data
    	}
    }) ;
  default:
    return state;
  }
}