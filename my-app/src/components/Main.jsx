import React from 'react'
import Todo from './Todo'
import Registration from './Registration';
import Temperature from './Temperature';
import Navbar from './Navbar'
function Main() {
    let Component;
    switch (window.location.pathname) {
      case "/":
        Component = <Todo/>;
        break;

      case "/todo":
        Component = <Todo />;
        break;
      case "/registration":
        Component = <Registration/>;
        break;
      case "/temperature":
        // eslint-disable-next-line no-unused-vars
        Component = <Temperature/>;
      // eslint-disable-next-line no-fallthrough
      // eslint-disable-next-line no-fallthrough
      default:
        break;
    }
  return (
    <div>
        <Navbar></Navbar>
        {Component}
    </div>
  )
}

export default Main