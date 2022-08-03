import React from 'react';
import ReactDOM from 'react-dom/client';
import { getAuth } from 'firebase/auth';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.css';
import {createStore, applyMiddleware, compose} from "redux";
// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider, firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
import { rootReducer } from "./store/reducers/reducers";
import { BrowserRouter } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { render } from 'react-dom';


const firebaseConfig = {
	apiKey: "AIzaSyAvMw4FhVOLXh1BFnz2fVN2-1t0YgsCIok",
	authDomain: "au-travel.firebaseapp.com",
	projectId: "au-travel",
	storageBucket: "au-travel.appspot.com",
	messagingSenderId: "201367498567",
	appId: "1:201367498567:web:75a7c3ba806fdf39d3a662",
	measurementId: "G-NRQFR2V4SG"
};


const rrfConfig = {
	toursProfile: "autours",
	userProfile: "users",
	useFirestoreForProfile: true,
};

const app = firebase.initializeApp(firebaseConfig);
firebase.firestore();
const auth = getAuth(app)

// firebase.initializeApp(firebaseConfig);
// firebase.firestore();


const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance
};

export {auth};

// const root = ReactDOM.createRoot(document.getElementById('root'));



render(
		<React.StrictMode>
			<Provider store={store}>
				<ReactReduxFirebaseProvider {...rrfProps}>
					<BrowserRouter>
						<App/>
					</BrowserRouter>
				</ReactReduxFirebaseProvider>
			</Provider>
			
		</React.StrictMode>,
		document.getElementById('root')
);






