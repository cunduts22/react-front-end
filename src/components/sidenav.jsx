import React from 'react'
import {NavLink} from 'react-router-dom'
import {inject, observer} from 'mobx-react'
class SideNav extends React.Component {
    constructor() {
      super()
    
      this.state = {
         
      }
      this.handleActive = this.handleActive.bind(this)
    }

    handleActive(value) {
        this.props.globalStore.setNav(value);
    }

        render() {
        const {globalStore} = this.props;
        return(
                <div className={globalStore.navToggle ? 'sidenav' : 'sidenav toin'}>
                    <div className="top-nav text-center">
                        <div className="img-side">
                            <img src="https://3.bp.blogspot.com/-syS_ZJpiXPg/WPomAHq1XPI/AAAAAAAABeE/IORb04UaO4UCYR62Rd7758u3XXLzNobFQCLcB/s1600/atomix_user31.png" alt="user" className="img-fluid"/>
                        </div>
                        <div className="top-content">
                            <p className="text-secondary">Web Developer</p>
                            <p className="text-secondary">Cuns</p>
                            <a href="#" className="btn btn-link">
                                <i className="ion-social-instagram-outline"></i>
                            </a>
                            <a href="#" className="btn btn-link">
                                <i className="ion-social-github"></i>
                            </a>
                            <a href="#" className="btn btn-link">
                                <i className="ion-social-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div className="side-content">
                        <div className="sidebar">
                            <div className="sidebar-link">
                                <NavLink to="/home" className={globalStore.sideActive === 'home' ? "btn btn-link active" : "btn btn-link"}
                                onClick={this.handleActive('home')}
                                >
                                    <i className="ion-home"></i>
                                    <span>Home</span>
                                </NavLink>
                            </div>
                            <div className="sidebar-link">
                                <NavLink to="/database" className={globalStore.sideActive === 'database' ? "btn btn-link active" : "btn btn-link"}
                                onClick={this.handleActive('database')}
                                >
                                    <i className="ion-android-folder"></i>
                                    <span>Database</span>
                                </NavLink>
                            </div>
                            <div className="sidebar-link">
                                <NavLink to="/report" className={globalStore.sideActive === 'report' ? "btn btn-link active" : "btn btn-link"}
                                onClick={this.handleActive('report')}
                                >
                                    <i className="ion-ios-list"></i>
                                    <span>Report</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default (inject('globalStore'))(SideNav);