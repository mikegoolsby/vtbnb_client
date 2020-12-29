import React from 'react'
// import Layout from '../src/components/Layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Amenities from './pages/Amenities'
import Contact from './pages/Contact'
// import Drawer from './components/Drawer'
import Home from './pages/Home'
import Map from './pages/Map'
import Procedures from './pages/Procedures'
import Rules from './pages/Rules'


function App() {

  const { REACT_APP_BACKEND_URL } = process.env
  const backendUrl = `${REACT_APP_BACKEND_URL}`

  const [rules, setRules] = React.useState([])

  const getRules = () => {
    fetch(backendUrl + "/rules")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setRules(data);
      })
  }

  // eslint-disable-next-line 
  React.useEffect(() => getRules(), []);


  return (
    <>
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />}/>
        <Route exact from="/procedures" render={props => <Procedures {...props} />}/>
        <Route exact from="/rules" render={props => <Rules {...props} rules={rules} />}/>
        <Route exact from="/amenities" render={props => <Amenities {...props}/>}/>
        <Route exact from="/map" render={props => <Map {...props} />}/>
        <Route exact from="/contact" render={props => <Contact {...props}/>}/>
      </Switch>
      {/* <Footer/> */}
    </BrowserRouter>
    {/* <Drawer/> */}
    </>
  );
}

export default App;
