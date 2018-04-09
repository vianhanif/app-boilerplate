import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'
import '../../assets/styling/css/pages/About/index.css'

export default connect(
  state => ({ ...state }),
  dispatch => bindActionCreators({ }, dispatch)
)(class About extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="page" id="about">
        <Helmet>
          <title> About Page</title>
        </Helmet>
        <div className="section menu">{JSON.stringify(this.props.app.value)}</div>
        <div className="section header">
          <Link to="/">Go to Home Page</Link>
        </div>
        <div className="section content">
          About Page
        </div>
        <div className="section sign-up"></div>
        <div className="section feature-1"></div>
        <div className="section feature-2"></div>
        <div className="section feature-3"></div>
      </div>
    );
  }

})
