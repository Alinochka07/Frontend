import React from "react";
import { HashRouter, useParams } from "react-router-dom";
import App from "./app";


 export const HomeApp = () => {
    const parameters = useParams();
    const history = HashRouter();

    return <App parameters={{location:history.location.pathname, id: parameters.id, goBack:history.goBack()
        }}/>

}

