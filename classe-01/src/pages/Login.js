import React from "react";
import { useHistory, Link } from "react-router-dom";

import useAuth from "../hooks/useAuth";

function Login() {
    const auth = useAuth();
    const history = useHistory();

    console.log(history)

    return (
        <div>
            <button onClick={() => auth.logar(() => history.push("/profile"))}>
                Entrar
            </button>
            <Link to="/profile">Meu perfil</Link>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Login;
