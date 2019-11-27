import React, {Component} from 'react';
import './App.css';
import MyWishlist from './components/MyWishlist';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import {withRouter} from 'react-router-dom';

class App extends Component {

  render(){

    return (
      <main className="App">
        <Login />
      </main>
    );
  }
}

export default withRouter(App);
