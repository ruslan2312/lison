import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContex from '../../../StoreContext';

function MyPostsContainer(props) {



    return (
        <StoreContex.Consumer  > 
            {
            (store) => {
                let state = store.getState();

                function addPost() {
                    store.dispatch(addPostActionCreator());
                }

                function onChangePost(text) {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);

                };

                return <MyPosts
                    updateNewPostText={onChangePost}
                    addPost={addPost}
                    PostData={state.Profile.PostData}
                    NewPostText={state.Profile.NewPostText} />
            }
        }
        </StoreContex.Consumer>
    )

};

export default MyPostsContainer;
