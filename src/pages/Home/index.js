import { connect } from 'react-redux'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mapDispatch } from './dispatch'
import { Helmet } from 'react-helmet'
import './style.scss'

export default connect(
  state => ({ ...state }),
  dispatch => ({ ...mapDispatch(dispatch) })
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
        <Helmet>
          <title> Home Page</title>
        </Helmet>
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
