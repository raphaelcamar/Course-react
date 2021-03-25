import React from 'react';
import './menu.css';
import {Link} from 'react-router-dom'

const Menu = props =>(
    <aside className="menu">
        <nav>
            <ul>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/param/123">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/legal">Param #02</Link>
                </li>

                <li>
                    <Link to="/naoExiste">Não existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu;