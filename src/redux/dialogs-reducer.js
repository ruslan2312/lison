const UpdateNewMessageBody = 'UpdateNewMessageBody';
const SendMessage = 'SendMessage';


let installState = {

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
};


function dialogsReducer(state = installState, action) {
    switch (action.type) {

        case UpdateNewMessageBody: {
            state.newMessageBody = action.body;
            return state;
        };


        case SendMessage: {
            let body = state.newMessageBody
            state.newMessageBody = '';
            state.m.push({ id: 6, message: body },);
            return state;
        };
        default: return state;
    };


}
export const sendMessageCreator = () => ({ type: SendMessage })

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UpdateNewMessageBody, body: body })

export default dialogsReducer;