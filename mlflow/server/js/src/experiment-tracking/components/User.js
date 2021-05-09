import React, { Component } from 'react';
import Routes from '../routes';
import $ from 'jquery';

export class User extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {username: ''};
    }
   
   
    componentDidMount() {
      this.serverRequest = $.get(this.props.source, function (result) {
        var owner = result;
        this.setState({
          username: owner,
        });
      }.bind(this));
    }
   
    componentWillUnmount() {
      this.serverRequest.abort();
    }
    
    render() {
      return (
        <div style={{ paddingRight: '10px',}}>
            {this.state.username}, 
        </div>
      );
    }
  }