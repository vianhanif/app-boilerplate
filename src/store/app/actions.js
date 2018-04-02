import * as types from './types'

export default {
  [types.LOAD_DATA] (commit, {data, callback}) {
    // assume there an API being hit in here
    commit({type: types.SETUP, payload: 'Loading...'})
    let payload = null
    setTimeout(() => {
      payload = {
        ...data,
        result: 'data for 0'
      }
      commit({
        type: types.SETUP,
        payload
      })
      callback()
    }, 1000)
  }
}
