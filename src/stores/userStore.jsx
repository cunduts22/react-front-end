import {observable, action, decorate} from 'mobx';

class userStore {
    userData = false
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    dataUser(value) {
        fetch('http://localhost:8080/notes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        }).then((err) => {
            if (err) 
                throw err
        })
    }
    deleteUser(values) {
        fetch('http://localhost:8080/notes/' + values, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        }).then((err) => {
            if (err) 
                throw err
        })
    }
}
decorate(userStore, {
    userData: observable,
    dataUser: action,
    deleteUser: action,
})

export default userStore;