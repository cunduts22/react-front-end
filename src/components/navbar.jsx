import React from 'react'
import {observer, inject} from 'mobx-react'
const Navbar = observer(class Navbar extends React.Component {
    constructor() {
      super();
    
      this.state = {
         toggle: false
      }
    }
    
    setNavi() {
        this.setState({
         toggle : !this.state.toggle
        });
        this.props.globalStore.showNav(this.state.toggle)
    }

    render() {
        return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark  justify-content-between fixed-top">
                    <div className="text-left">
                        <a className="navbar-brand" href="#">React Js</a>
                        <a href="javascript:void(0)" className="btn btn-link" onClick={this.setNavi.bind(this)}><i className="ion-navicon-round"></i></a>
                    </div>

                    <div className="text-center">
                        <h5 className="display-4">Awesome React</h5>
                    </div>

                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Profile</a>
                        <a className="nav-item nav-link" href="#">Setting</a>
                    </div>                    
                </nav>
        )
    }
})

export default (inject('globalStore'))(Navbar);