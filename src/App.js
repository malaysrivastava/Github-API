import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Storage from './components/Storage'
import Home from './core/Home'

const App =()=> {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact render={props => <Home {...props} />} />
          <Route path='/storage' exact render={props => <Storage {...props} />} />
        </Switch>
       </BrowserRouter>
     </div>   
  );
}

export default App;
