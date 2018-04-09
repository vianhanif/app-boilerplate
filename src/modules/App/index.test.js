import React from 'react'
import renderer from 'react-test-renderer'
import colors from 'colors'
import store from '../../../src/store'
import * as actions from './actions'

const green = (text) => colors.green(colors.bold(text))
const yellow = (text) => colors.bgBlack(colors.yellow(colors.bold(text)))

// const store = configureStore()

describe('Module::App', () => {

  it(`Actions::loadData`, () => {
    expect(store.getState().app.value).toEqual(null)
    let data = {
      id: 0
    }
    return store.dispatch(actions.loadData(data)).then(() => {
      let payload = {
        request: {
          ...data
        },
        response: {
          title: 'dummy'
        }
      }
      expect(store.getState().app.value).toEqual(payload)
    })
  })

})
