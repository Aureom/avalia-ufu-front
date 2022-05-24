import React from 'react';

import './styles/navbarStyle.scss';
import Button from "../button/Button";
import {BiLock} from "react-icons/bi";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="logo">AVALIA UFU</div>
            <div className="navbar-menu">
                <a href="/login">
                    <button className="login">
                        ENTRAR
                    </button>
                </a>
                <a href="/register">
                    <Button text="REGISTRAR" icon={<BiLock size="1.5rem"/>}/>
                </a>
            </div>
        </div>
    );
}