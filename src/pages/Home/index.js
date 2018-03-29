import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import appAction from '../../store/app/actions'
import * as appTypes from '../../store/app/types'
import './style.scss'

export default connect(
  state => ({...state}),
  commit => ({
    loadData () {
      appAction[appTypes.LOAD_DATA] (commit, {
        data: {
          id: 0
        },
        callback () {}
      })
    }
  })
)(class Home extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);
    this.props.loadData()
    this.state = {

    };
  }

  render() {
    return (
      <div className="page">
        <div className="section menu">{JSON.stringify(this.props.app.value)}</div>
        <div className="section header"></div>
        <div className="section content"></div>
        <div className="section sign-up"></div>
        <div className="section feature-1"></div>
        <div className="section feature-2"></div>
        <div className="section feature-3"></div>
      </div>
    );
  }

})
