import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebatReducer from './sidebar-reducer';


let reducers = combineReducers({
    Profile: profileReducer,
    Dialogs: dialogsReducer,
    sidebar: sidebatReducer
});

let store = createStore(reducers);


export default store;