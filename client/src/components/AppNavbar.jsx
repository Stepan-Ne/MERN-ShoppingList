import React, { Component } from 'react';
import ItemModal from './ItemModal';


export default class AppNavbar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <ItemModal />

        </div>
      </nav>
    );
  }
}
