import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebatReducer from './sidebar-reducer';


let store = {
    _state: {

        Profile: {
            NewPostText: "sad",

            PostData: [
                { id: 1, message: 'Hello', like: 10 },
                { id: 2, message: 'My first post', like: 2 },
                { id: 3, message: 'My second post', like: 4 },
               
            ]
        },
        Dialogs: {
            m: [
                { id: 1, message: '1' },
                { id: 2, message: '2' },
                { id: 3, message: '3' },
                { id: 4, message: '4' },
                { id: 5, message: '5' }
            ],

            d: [
                { id: 1, name: 'Danil' },
                { id: 2, name: 'Kirirl' },
                { id: 3, name: 'Felix' },
                { id: 4, name: 'Lexa' }
            ],
            newMessageBody: ''
        },
        sidebar: {
            ava: [
                { photo: 'https://goo.su/1YqP', name: 'Danil' },
                { photo: 'https://goo.su/1YqP', name: 'Kiril' },
                { photo: 'https://goo.su/1YqP', name: 'Felix' },
            ]
        }
    },

    _CallSubscriber() {
    },
    getState() {
        return this._state;
    },


    dispatch(action) {
        this._state.Profile = profileReducer(this._state.Profile, action);
        this._state.Dialogs = dialogsReducer(this._state.Dialogs, action);
        this._state.sidebar = sidebatReducer(this._state.sidebar, action);


        this._CallSubscriber(this._state);
    },


    NewMessageBoody() {

    },

    subscribe(observer) {
        this._CallSubscriber = observer;
    },



}



window.store = store;
export default store;
