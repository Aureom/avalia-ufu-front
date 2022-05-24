import React from "react";
import Button from "../../components/button/Button";
import {BiLock} from "react-icons/bi";

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-form">
                    <form>
                        <div className="login-form-input">
                            <input type="text" placeholder="Usuário"/>
                        </div>
                        <div className="login-form-input">
                            <input type="password" placeholder="Senha"/>
                        </div>
                        <div className="login-form-button">
                            <Button text="ENTRAR" icon={<BiLock/>}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}