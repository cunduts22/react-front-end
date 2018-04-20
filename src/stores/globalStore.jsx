import {observable, action, decorate, runInAction, flow, configure} from 'mobx';


configure({ enforceActions: true })
class globalStore {
    navToggle = false;
    sideActive = '';
    toggleDModal = false;
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.loadDatas;
     }
    showNav(dvalue) {
        this.navToggle = dvalue;
    }

    setNav(value) {
        this.sideActive = value;
    }

    tbData(valued) {
        fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(valued)
        })
        .then((err) => {
            if(err) throw err
        })
    }

    showDModal(value) {
        this.toggleDModal = value;
    }

}
decorate(globalStore, {
    navToggle: observable,
    sideActive: observable,
    toggleDModal: observable,
    showNav: action,
    setNav: action,
    tbData: action, 
    showDModal: action   
})

export default globalStore; 