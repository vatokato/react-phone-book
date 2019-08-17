import React from 'react';
import SearchContainer from './containers/SearchContainer'
import ListContainer from './containers/ListContainer'
import AddItemContainer from './containers/AddItemContainer'


class App extends React.Component {
  componentDidMount() {
    document.title = "Телефонный справочник"
  }

  render () {
    return (
      <div className="App">
        <SearchContainer />
        <AddItemContainer />
        <ListContainer />
      </div>
    )
  }
}

export default App;