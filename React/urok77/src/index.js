import React from "react";
import {createRoot} from 'react-dom/client';
// import App from "./App";
import App from "./components/app/app";
import "bootstrap/dist/css/bootstrap.css"
import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HomeApp} from "./components/app/index";




const container = document.getElementById('root');
const root = createRoot(container);

root.render(
        <BrowserRouter>
          <Routes>
                <Route path="" component={App}/>
          </Routes>
        </BrowserRouter>
);




