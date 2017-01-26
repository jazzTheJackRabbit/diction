import React, { Component } from 'react';
import {connect} from 'redux'
import {Link} from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className="ui grid container">
        {this.props.children}
      </div>
      );
  }
}
