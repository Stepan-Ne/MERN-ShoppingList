import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions';

function ItemModal({ addItem }) {

  const [state, setState] = useState({ name: '' });

  const onChangeHandler = (e) => {
      setState({ [e.target.name]: e.target.value });
  };
  const onAddHandler = () => {
    if (state.name.trim()) {
      addItem({name: state.name});
      setState({name: ''});
    }
  };
  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter' && state.name.trim()) {
      addItem({name: state.name});
      setState({name: ''});
    }
  }

  return (
    <div className='input-group m-3'>
      <a className='navbar-brand' href='#'>
        Default
      </a>
      <input
        type='text'
        name='name'
        className='form-control'
        placeholder='Add item'
        value={state.name}
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
      />
      <button
        className='btn btn-outline-secondary ml-1'
        type='button'
        id='button-addon2'
        onClick={onAddHandler}
      >
        Add
      </button>
    </div>
  );
}

export default connect(null, { addItem })(ItemModal);
