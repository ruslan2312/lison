import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'



function MyPosts(props) {
    let PostElements = props.PostData.map(PostData => <Post message={PostData.message} id={PostData.id} like={PostData.like} />)
    let NewPostElements = React.createRef();

    function onAddPost() {
        props.addPost();
    }
   
    function onChangePost() {
        let text = NewPostElements.current.value
        props.updateNewPostText(text);

    };
                 
    return (
        <div>
            <div className={s.items}>
                ava+decription
    </div>
            <div className={s.items} >
                <h2>  My post </h2>
            </div>

            <textarea onChange={onChangePost} ref={NewPostElements} value={props.NewPostText} /> 

            <div>
                <button onClick={onAddPost}> Добавить пост </button></div>
            <div>
                {PostElements}
            </div>
        </div>
    )

};
export default MyPosts;
