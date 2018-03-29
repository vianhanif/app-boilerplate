import appAction from '../../store/app/actions'
import * as appTypes from '../../store/app/types'

const mapDispatch = (dispatch) => {
  return {
    loadData () {
      appAction[appTypes.LOAD_DATA] (dispatch, {
        data: {
          id: 0
        },
        callback () {}
      })
    }
  }
}

export {
  mapDispatch
}
