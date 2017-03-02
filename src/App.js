import React, { Component } from 'react';
import ItemList from './components/item_list';
import AddItem from './components/add_item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start_id: 0,
      todo_list: []
    }

    // Bind these functions to 'this' to keep context when passing
    // functions as props
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  // This function will add an item passed to it and add it to the state
  addItem(item) {
    // Create new list of todos to not alter state directly
    let items = this.state.todo_list.slice();
    let id = this.state.start_id + 1;

    this.setState({start_id: id });
    items.push( {
      id: id,
      item: item
    });

    this.setState({ todo_list: items });
  }

  // This function will take a todo list item id and remove that item
  // from the state
  removeItem(id) {
    // Create new list of items to not alter state directly
    let items = this.state.todo_list.filter( (item) => {
      if (item.id !== id) return item;
    });

    this.setState({ todo_list: items});
  }

  render() {
    return (
      <div className="container">
          <h2>Simple Todo List Example</h2>
          <h5>Using React / Create-react-app / Bootstrap</h5>
          <AddItem onAddItem={this.addItem} />
          <ItemList
            onRemoveItem={this.removeItem}
            items={this.state.todo_list} />
      </div>
    );
  }
}

export default App;
