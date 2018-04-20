import React from 'react'

class Header extends React.Component {
    render() {
        return(
            <div>
                <header className="v-header head-container">
                    <div className="fullscreen-video-wrap">
                    <video autoPlay="true" loop="true" muted="true">
                     <source src="https://gcs-vimeo.akamaized.net/exp=1524002006~acl=%2A%2F634940755.mp4%2A~hmac=5a9b657ab95f3a48d0d289c010a8e4570d88e942e5383365e84e31b182a1fc86/vimeo-prod-skyfire-std-us/01/3191/7/190959497/634940755.mp4" type="video/mp4"/>
                    </video>
                     <div className="header-overlay">
                            <div className="header-content">
                                <h1>Hello Everyone</h1>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi voluptatem error nam nostrum cumque? Quisquam hic optio, magnam expedita eum consequatur, odio labore itaque praesentium sunt, ab odit reiciendis?</p>
                                <button className="btn btn-danger btn-lg">Login</button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;