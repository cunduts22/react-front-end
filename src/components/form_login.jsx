import React, { Component } from 'react'

export default class FormLogin extends Component {
    render() {
        
        return (
            <div>
               <div className="container">
                <div className="card">
                <h3 className="text-center">Login</h3>
                    <form className="form">
                            <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="submit" className="btn btn-secondary"/>
                            </div>
                    </form>
                </div>
               </div>
            </div>
        )
    }
}
