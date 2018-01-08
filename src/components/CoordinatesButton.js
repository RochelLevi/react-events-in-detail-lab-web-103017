import React from 'react';

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    event.persist()
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}
