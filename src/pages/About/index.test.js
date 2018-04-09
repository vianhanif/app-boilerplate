import React from 'react'
import renderer from 'react-test-renderer'
import colors from 'colors'
import About from './index'
import { MockProvider } from '../../shared/utils'

const green = (text) => colors.green(colors.bold(text))
const yellow = (text) => colors.bgBlack(colors.yellow(colors.bold(text)))

describe('Page::About', () => {

  it(`Rendered `, () => {
    const component = renderer.create(
      <MockProvider component={About}/>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
