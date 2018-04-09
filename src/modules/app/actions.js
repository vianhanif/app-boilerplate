import {
  LOAD_DATA
} from './types'

export const loadData = (data = {}) => {
  return dispatch => {
    dispatch({ type: LOAD_DATA, payload: 'Loading...' })
    return new Promise(
      resolve => {
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
          resolve()
        }, 2000)
      },
      reject => {}
    )
  }
}
