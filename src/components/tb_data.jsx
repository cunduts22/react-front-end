import React from 'react'
import {observer, inject} from 'mobx-react'

class TbData extends React.Component {
    constructor() {
      super()
    
      this.state = {
         data: [],
      }
    }
    
    componentDidMount() {
    
         fetch('http://localhost:8080/users')
        .then(res => res.json())
        .then(res => {
            res.map(data => {
                const rdata = {
                    id: data.id,
                    nama_barang: data.nama_barang,
                    jenis_barang: data.jenis_barang,
                    harga_barang: data.harga_barang,
                    stok_barang: data.stok_barang,
                    time: data.waktu
                }
                this.setState({
                    data: [...this.state.data, rdata]
                })
            })
        })
    }
    componentWillUnmount() {
        this.setState({data:['']})
    }
    handleDelete() {
        this.props.globalStore.showDModal(true)
    }

    render() {
        const {globalStore} = this.props;
        const { data } = this.state;
        const list = data.map((snap) => {
            return (
                    <tr key={snap.id} snap={snap}>
                        <td>{snap.id}</td>
                        <td>{snap.nama_barang}</td>
                        <td>{snap.jenis_barang}</td>
                        <td>{snap.harga_barang}</td>
                        <td>{snap.stok_barang}</td>
                        <td>{snap.time}</td>
                        <td>
                            <a href="javascript:void(0)" className="btn btn-danger btn-sm" onClick={this.handleDelete.bind(this)}>X</a>
                        </td>
                    </tr>
            )
            })
        return(
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th className="text-light" scope="col">ID</th>
                            <th className="text-light" scope="col">Nama Barang</th>
                            <th className="text-light" scope="col">Jenis Barang</th>
                            <th className="text-light" scope="col">Harga Barang</th>
                            <th className="text-light" scope="col">Stok Barang</th>
                            <th className="text-light" scope="col">Waktu</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default inject('globalStore')(TbData);