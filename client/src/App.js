import './App.css';

import {Route, Switch} from 'react-router-dom'

import Home from './Components/Home/Home';
import ToHomeButton from './Components/LandingPage/ToHomeButton' 
import LandingTitle from './Components/LandingPage/LandingTitle' 

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LandingTitle/>
          <ToHomeButton/>
        </Route>
        <Route path ='/home'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
