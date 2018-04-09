import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router, withRouter } from 'react-router-dom'
import colors from 'colors'
import Meta from './index'

const green = (text) => colors.green(colors.bold(text))
const yellow = (text) => colors.bgBlack(colors.yellow(colors.bold(text)))

describe('Component::Meta', () => {

  it(`Rendered `, () => {
    const component = renderer.create(
      <Router>
        <Meta title="Sample Title"/>
      </Router>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
