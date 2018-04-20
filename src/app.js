import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {inject, observer} from 'mobx-react'

import Home from './pages/Home'
import Database from './pages/Database'
import Report from './pages/Report'

import Navbar from './components/navbar'
import SideNav from './components/sidenav'
import Layouts from './components/layout'
const App = observer(
class App extends Component {
    constructor() {
      super()
    }
    
    render() {
        return (
           <Router>
               <div>
                    <Navbar />
                    <SideNav/>
                    <div className={this.props.globalStore.navToggle ? 'side-containers' : 'containers'}>
                        <Route path="/home" exact component={() => {
                            return <Home/>
                        }}/>
                        <Route path="/database" exact component={() => {
                            return <Database />
                        }}/>
                        <Route path="/report" exact component={() => {
                            return <Report />
                        }}/>
                    </div>
               </div>
           </Router>
        )
    }
})
export default (inject('globalStore'))(App);