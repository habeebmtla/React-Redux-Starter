import ActionTypes from '../constants/AppConstants' 
import {API_URL} from '../utils/constants'
import {store} from '../stores'
import axios from 'axios';

const dispatch = action => store.dispatch(action)

export function setInputs(inputs) {
  return {
    type: ActionTypes.SET_INPUTS,
    inputs
  }
}

export function loadingStatus(name,status) {
  return {
    type: ActionTypes.SET_LOADING_STATUS ,
    name,
    status
  }
}

export function apiData(name,data) {
  return {
    type: ActionTypes.SET_API_DATA ,
    name,
    data
  }
}


export function getApi(name,endpoint) {
    dispatch(loadingStatus(name,true))
    axios.get(API_URL+endpoint)
    .then(res => {
      dispatch(loadingStatus(name,false))
      dispatch(apiData(name,res.data))
    })
}