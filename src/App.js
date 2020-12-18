import React from 'react'
// import Layout from '../src/components/Layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
// import Drawer from './components/Drawer'
import Home from './pages/Home'
import Rules from './pages/Rules'


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />}/>
        <Route exact from="/rules" render={props => <Rules {...props} />}/>
      </Switch>
    </BrowserRouter>
    {/* <Drawer/> */}
    </>
  );
}

export default App;
