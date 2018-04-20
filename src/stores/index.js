import { configure } from 'mobx'
import globalStore from './globalStore'

// configure({ enforceActions: true });
class RootStore {
    constructor() {
        this.globalStore = new globalStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;
