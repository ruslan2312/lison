import React from 'react';
import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom';

function Dialog(props) {
let num_id = "/Dialog/" + props.id;
    return (
        <div className = {s.Dialog}>
            <NavLink  to = {num_id}>
            <img src="https://get.pxhere.com/photo/avatar-people-person-business-user-man-character-set-icon-portrait-profile-pictograph-hairstyle-jacket-suit-sunglasses-handsome-head-face-design-concept-symbol-smile-formal-elements-eyewear-vision-care-gentleman-male-shoulder-outerwear-necktie-businessperson-facial-hair-glasses-clip-art-human-behavior-white-collar-worker-neck-1447673.jpg" />
                {props.name}
            </NavLink>
        </div>
    );
}
export default Dialog ;