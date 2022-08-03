import React from "react";
import { Redirect, Route, Switch, Router } from "react-router-dom";
import { HomeApp } from "../components/app/index";
import { AboutUs } from "../components/about/about";

export default function AppRouter() {
    return(
        <Switch>
            <Router>
                <Route>
                    path={"/home"}
                    component={HomeApp}
                </Route>
            </Router>

            <Route>
                path={"/preview/:id"}
                component={HomeApp}
                exact
            </Route>

            <Route>
                path={"/fullInfo/:id"}
                component={HomeApp}
                exact
            </Route>

            <Route>
                path={"/about"}
                component={AboutUs}
                exact
            </Route>

            <Redirect to="/home"/>
        </Switch>
    )
}