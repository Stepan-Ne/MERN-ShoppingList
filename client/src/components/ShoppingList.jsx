import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../redux/actions';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  removeItem = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const { items, loading } = this.props;
    return (
      <div className="container m-2">

        {loading
        ? <p>Loading...</p>
      : null}

      <ul className='list-group'>
        {items.map(({ name, _id }) => (
          <li className='list-group-item' key={_id}>
            {name}
            <button
              type='button'
              onClick={() => this.removeItem(_id)}
              className='btn btn-danger ml-5 btn-sm'
            >Delete</button>
          </li>
        ))}
      </ul>
      </div>
    );
  }
}

const mapStateToProsp = (state) => {
  return { 
    items: state.itemState.items,
    loading:  state.itemState.loading
  };
};
export default connect(mapStateToProsp, { getItems, deleteItem })(ShoppingList);
