import React from 'react';
import SearchContainer from './containers/SearchContainer'
import ListContainer from './containers/ListContainer'
import AddItemContainer from './containers/AddItemContainer'


class App extends React.Component {
  componentDidMount(){
    document.title = "Телефонный справочник"
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Телефонный справочник</h1>
        </header>
        <main>
          <SearchContainer />

          <div className="middle">
            <ListContainer />
            <AddItemContainer />
          </div>

        </main>
      </div>
    )
  }
}

export default App;