import React, { Component } from 'react';

class ItemList extends Component {

  // This function will render the list of todo items
  // TODO: separate this item into another component ItemDetail
  render_item_list() {
    return this.props.items.map( (item) => {
        return(
          <li className="list-group-item list-group-item-action justify-content-between" key={item.id}>
            {item.item}
            <button
              className="btn btn-outline-danger"
              onClick={event => this.props.onRemoveItem(item.id)}>X</button>
          </li>
        );
      });
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.render_item_list()}
      </ul>
    );
  }
}

export default ItemList;
