import React, { Component } from 'react';
import routes from './routes';
import Header from './components/Header/Header';
import { HashRouter } from 'react-router-dom';
import 'bulma/css/bulma.css';


class App extends Component {

  render() {
    return (
      <HashRouter>  
        <div>
        <Header/>
        {routes}
        </div>
      </HashRouter>  
    );
  }
}

export default App;
