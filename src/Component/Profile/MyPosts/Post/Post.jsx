import React from 'react';
import f from './Post.module.css'






function Post(props) {
    return (
        <div className={f.post} >
            <img src="https://get.pxhere.com/photo/avatar-people-person-business-user-man-character-set-icon-portrait-profile-pictograph-hairstyle-jacket-suit-sunglasses-handsome-head-face-design-concept-symbol-smile-formal-elements-eyewear-vision-care-gentleman-male-shoulder-outerwear-necktie-businessperson-facial-hair-glasses-clip-art-human-behavior-white-collar-worker-neck-1447673.jpg" />
            {props.message}

            <div><button className={f.like_img}> <img src="https://www10.yenibaslama.co/upload_1_thumb_15-cm-12-9-cm-ilginç-yaşasın-vinil-araba-sticker-motosiklet-çıkartmaları-siyah-gümüş-s6-3253_22704.jpg" /> </button>  {props.like} </div>

        </div>


    )


};
export default Post;

