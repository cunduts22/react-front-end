import React, { Component } from 'react'
import {inject} from 'mobx-react'
class FormData extends Component {

    handleSubmit(e) {

        const data = {
            nama_barang: this.refs.nama_brg.value,
            jenis_barang: this.refs.j_brg.value,
            harga_barang: this.refs.h_brg.value,
            stok_barang: this.refs.stk_brg.value,
        }
        console.log(data)
        this.props.globalStore.tbData(data)

        e.preventDefault();
        e.target.reset;
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <h6 className="display-4 text-center">Input Barang</h6>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="">Nama Barang</label>
                                <input type="text" ref="nama_brg" className="form-control"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="">Jenis Barang</label>
                                <select name="" id="" ref="j_brg" className="form-control">
                                    <option value="a">-a-</option>
                                    <option value="b">-b-</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="">Harga Barang</label>
                                <input type="text" ref="h_brg" className="form-control"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="">Stok Barang</label>
                                <input type="number" ref="stk_brg" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="submit" className="btn btn-secondary form-control"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default (inject('globalStore'))(FormData);
