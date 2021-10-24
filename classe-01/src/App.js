import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./App.css";

import AuthProvider from "./contexts/AuthContext/AuthProvider.js";
import useAuth from "./hooks/useAuth";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";

function RotasProtegidas(props) {
  const auth = useAuth();

  return (
    <Route
      render={() => (auth.token ? props.children : <Redirect to="/login" />)}
    />
  );
}

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <div className="main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <RotasProtegidas>
                <Route path="/profile" component={Perfil} />
              </RotasProtegidas>
            </Switch>
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
