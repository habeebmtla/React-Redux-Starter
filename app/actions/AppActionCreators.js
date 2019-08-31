import ActionTypes from '../constants/AppConstants' 
import {API_URL} from '../utils/constants'
import {store} from '../stores'
import axios from 'axios';

import './Interceptor';

axios.defaults.baseURL = API_URL;

const dispatch = action => store.dispatch(action)

export function setInputs(inputs) {
  return {
    type: ActionTypes.SET_INPUTS,
    inputs
  }
}


export function getApi(name,endpoint) {
    axios.get(endpoint)
    .then(res => {
      dispatch(setInputs({[name]:res.data}))
    })
}