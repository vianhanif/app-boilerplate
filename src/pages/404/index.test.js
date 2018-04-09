import React from 'react'
import renderer from 'react-test-renderer'
import colors from 'colors'
import Page404 from './index'
import { MockProvider } from '../../shared/utils'

const green = (text) => colors.green(colors.bold(text))
const yellow = (text) => colors.bgBlack(colors.yellow(colors.bold(text)))

describe('Page::Page404', () => {

  it(`Rendered `, () => {
    const component = renderer.create(
      <MockProvider component={Page404}/>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
