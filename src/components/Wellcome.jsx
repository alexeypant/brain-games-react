import React from 'react';

export default class Wellcome extends React.Component {

  render() {
    return (
      <div className="container">
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4">Welcome to the Brain Games</h1>
          <p className="lead">Select one of the following games and enjoy</p>
          {this.props.children}
        </div>
      </div>
      </div>
    );
  }
}
