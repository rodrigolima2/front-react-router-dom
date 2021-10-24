import React from "react";

import { Link } from "react-router-dom";

function Profile() {
    return (
        <div>
            Bem vindo
            <Link to="/">Início</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Profile;
