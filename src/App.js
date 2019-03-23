import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Header from './components/Header/Header';
import { HashRouter } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <HashRouter>  
        <div className="App">
        <Header/>
        {routes}
        </div>
      </HashRouter>  
    );
  }
}

export default App;
