import React from 'react';
import {Link , NavLink} from "react-router-dom";
function Menu(props) {
    return (
        <ul className="menu">
            <li>
                <NavLink
                    to="/"
                    className={({isActive}) => isActive ? "active" : ""}
                >
                    users</NavLink>
            </li>
            <li>
                <NavLink to="/button"
                         className={({isActive}) => isActive ? "active" : ""}
                >
                    buttons</NavLink>
            </li>
            <li>
                <NavLink to="/main"
                         className={({isActive}) => isActive ? "active" : ""}
                >
                    main</NavLink>
            </li>
            <li>
                <NavLink to="/about"
                         className={({isActive}) => isActive ? "active" : ""}
                >
                    about</NavLink>
            </li>
            <li>
                <NavLink to="/portfolio"
                         className={({isActive}) => isActive ? "active" : ""}
                >
                    portfolio</NavLink>
            </li>
        </ul>
    );
}

export default Menu;
