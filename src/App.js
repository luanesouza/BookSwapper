import React, {Component} from 'react';
import './App.css';
import MyWishlist from './components/MyWishlist';

class App extends Component {

  render(){

    return (
      <main className="App">
        <MyWishlist />
      </main>
    );
  }
}

export default App;
