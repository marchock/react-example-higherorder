import React, { Component } 'react';

// HOC id a function is called with an existing component.

// THIS IS THE SKELOTON OF A HIGHER ORDER COMPONENT

// Higher Order uses a function
export default function() {

  class Authentication extends Component {
    render() {
      return <ComposedComponent { ...this.props } />
    }
  }

  return Authentication;
}


// In some other location .. not in this file

// we want to use this HOC


import Authentication // this is my HOC

import Resources // this is the component to want to wrap

const ComposedComponent = Authenticatiom(Resources);


//in some render method ...

<ComposedComponent />
