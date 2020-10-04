import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Sidbar from './Sidebar/Sidebar';
import StoreContex from '../../StoreContext';

function Navbar(props) {



    return (
        <StoreContex.Consumer>
            {
                (store) => {
                    let state = store.getState().sidebar;
                    let Photograf = state.ava.map(ava => <Sidbar photo={ava.photo} name={ava.name} />)



                    return (<nav className={s.nav}>
                        <div className={s.items}>
                            <div>
                                <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
                            </div>
                            <div>
                                <NavLink to='/Dialogs' activeClassName={s.active}>Messsage</NavLink>
                            </div>
                            <div>
                                <NavLink to='/News' activeClassName={s.active}>News</NavLink>
                            </div>
                            <div>
                                <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
                            </div>
                            <div>
                                <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
                            </div>

                            <div>
                                <h2 className={s.h3}>Friends</h2>

                                {Photograf}



                            </div>
                        </div>
                    </nav>)


                }
            }
        </StoreContex.Consumer>
    )


};
export default Navbar;