import React from 'react'
import renderer from 'react-test-renderer'
import colors from 'colors'
import Home from './index'
import { MockProvider } from '../../shared/utils'

const green = (text) => colors.green(colors.bold(text))
const yellow = (text) => colors.bgBlack(colors.yellow(colors.bold(text)))

describe('Page::Home', () => {

  it(`Rendered `, () => {
    const component = renderer.create(
      <MockProvider component={Home}/>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
