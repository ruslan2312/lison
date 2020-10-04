import React from 'react';
import s from './Message.module.css'
import { NavLink } from 'react-router-dom';

function Message(props) {
    let NewMessageElements = React.createRef();

    function NewMessage() {
        let messages = NewMessageElements.current.value;
        alert(messages);
    }

    return (
        <div>
            {props.message}
        </div>
    )


}













export default Message;