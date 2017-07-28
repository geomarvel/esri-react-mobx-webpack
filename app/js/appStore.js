import { autorun,computed, observable } from "mobx"

export class AppStore {
    @observable view = {};
    @observable zoomLevel = 2

}

var store = window.store = new AppStore
export default store;

autorun(() =>{
    console.log(store.view.zoom)
})