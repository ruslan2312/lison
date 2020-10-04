import React from 'react';
import { updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import StoreContex from '../../StoreContext';
import Dialogs from './Dialogs';

function DialogsContainer(props) {






    return (
        <StoreContex.Consumer>
            {
                (store) => {
                    let state = store.getState().Dialogs;


                    function LetSendElements() {
                        store.dispatch(sendMessageCreator());
                    }
                    function onNewMesageChange(body) {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    }

                    return <Dialogs LetSendElements={LetSendElements} updateNewMessage={onNewMesageChange} Dialogs={state} />


                }
            }
        </StoreContex.Consumer>

    );
}



export default DialogsContainer;