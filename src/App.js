import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Gallery, Homepage, ItemView } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <main className="main">
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/shop/item/:id" component={ItemView}/>
            <Route path="/shop" component={Gallery}/>
          </Switch>
        </main>

      </div>
    );
  }
}

export default App;
