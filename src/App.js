import React from 'react'
// import Layout from '../src/components/Layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
// import Drawer from './components/Drawer'
import Home from './pages/Home'
import Map from './pages/Map'
import Rules from './pages/Rules'


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />}/>
        <Route exact from="/rules" render={props => <Rules {...props} />}/>
        <Route exact from="/map" render={props => <Map {...props} />}/>
      </Switch>
    </BrowserRouter>
    {/* <Drawer/> */}
    </>
  );
}

export default App;
