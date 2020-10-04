import React from 'react';
import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

function Sidbar(props) {
    return (

        <div className={s.h3}>
          
            <div className={s.h3}>  <img src="https://goo.su/1YqP" alt=""/>  {props.name} </div>

        </div>);
};

export default Sidbar;