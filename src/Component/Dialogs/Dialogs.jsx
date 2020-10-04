import React from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'



function Dialogs(props) {

    let state = props.Dialogs;

    let MessageElements = state.m.map(m => <Message message={m.message} />)
    let DialogElements = state.d.map(d => <Dialog name={d.name} id={d.id} />)
    let newMessageBody = state.newMessageBody;

    function LetSendElements() {
        props.LetSendElements();
    }
    function onNewMesageChange(event) {
        let body = event.target.value;
        props.updateNewMessage(body);
    }

    return (
        <div className={s.Dialogs}>

            <div className={s.Messages}>
                {DialogElements}
            </div>

            <div className={s.Messages}>
                {MessageElements}
            </div>

            <div>
                <textarea value={newMessageBody}
                    onChange={onNewMesageChange}
                >

                </textarea>

                <div> <button onClick={LetSendElements}>Написать сообщение</button> </div>
            </div>
        </div>

    );
}
export default Dialogs;