import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'
import TbData from './tb_data'
import FormData from './form_data'
import DModal from './dmodal'
class Layouts extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
    }
  }

  handleModal() {
      this.setState({
        showModal: !this.state.showModal
      })
    }
    handleDModal() {
      this.props.globalStore.showDModal(false)
    }

  render() {
    return (
      <div className="layouts">
      <h3 className="display-4 text-center text-success">Database Barang</h3>
      <div className="text-right">
        <a className="btn btn-link" onClick={this.handleModal.bind(this)}><i className="ion-ios-plus-outline"></i><span>Tambah barang</span> </a>
      </div>
        <div className={this.state.showModal ? 'm-modal' : 'm-modal n-modal'}>
            <a href="#" className="btn btn-link text-right" onClick={this.handleModal.bind(this)}><i className="ion-ios-close-empty"></i></a>
          <div className="tb-modal">
            <FormData />
          </div>
        </div>
        <TbData />
         <div className={this.props.globalStore.toggleDModal ? 'm-modal' : 'm-modal n-modal'}>
            <a href="#" className="btn btn-link text-right" onClick={this.handleDModal.bind(this)}><i className="ion-ios-close-empty"></i></a>
          <div className="tb-modal">
            <DModal />
          </div>
        </div>
      </div>
    )
  }
}

export default inject('globalStore')(observer(Layouts));
