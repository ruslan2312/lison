const UpdateNewPostText = 'UpdateNewPostText';
const newPost = 'newPost';

let installState = {

    NewPostText: [' '] ,

    PostData: [
        { id: 1, message: 'Hello', like: 10 },
        { id: 2, message: 'My first post', like: 2 },
        { id: 3, message: 'My second post', like: 4 },

    ]

};


function profileReducer(state = installState, action) {
    switch (action.type) {

        case newPost: {
            let newPost = {
                id: 4,
                message: state.NewPostText,
                like: 0
            };
            state.PostData.push(newPost);
            state.NewPostText = '';
            return state;
        };

        case UpdateNewPostText: {
            state.NewPostText = action.newText;
            return state;
        };
        default: return state;



    }

}
export const addPostActionCreator = () => ({ type: newPost })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UpdateNewPostText, newText: text })


export default profileReducer;