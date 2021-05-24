import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/styles.scss";

const ROOT_ELEMENT = document.getElementById("root");

ReactDOM.render(
    <StrictMode>
        <div className="navbar">
            <span>HOME</span>
            <div className="nav-links">
                <button className="nav-btn">Apps</button>
                <button className="nav-btn">Login</button>
            </div>
        </div>
        <Router>
            <Switch>
                <Route path="/" exact>
                    MAIN APP
                </Route>
            </Switch>
        </Router>
    </StrictMode>,
    ROOT_ELEMENT
);
2;
