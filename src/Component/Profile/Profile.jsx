import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './PorfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {

    return (<div >
        <ProfileInfo />

        <MyPostsContainer   />

    </div>)
};
export default Profile;

