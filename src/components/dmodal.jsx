import React, { Component } from 'react'

export default class DModal extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <p className="lead text-center">Are You Sure ?</p>
                    <a href="javascript:void(0)" className="btn btn-danger">Yes</a>
                    <a href="javascript:void(0)" className="btn btn-success">No</a>
                </div>
            </div>
        )
    }
}
