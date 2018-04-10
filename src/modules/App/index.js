import {
  LOAD_DATA
} from './types'


export const initialState = {
  value: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        value: action.payload
      }
    default:
      return state
  }
}
