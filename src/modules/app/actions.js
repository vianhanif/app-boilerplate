import {
  LOAD_DATA
} from './types'

export const loadData = (data = {}, callback = () => {}) => {
  return dispatch => {
    dispatch({ type: LOAD_DATA, payload: 'Loading...' })
    setTimeout(() => {
      let payload = {
        request: {
          ...data
        },
        response: {
          title: 'dummy'
        }
      }
      dispatch({
        type: LOAD_DATA,
        payload
      })
      callback()
    }, 2000)
  }
}
