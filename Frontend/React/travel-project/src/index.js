import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getAuth } from 'firebase/auth';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.css';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider, firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
import { rootReducer } from "./store/reducers/reducers";
import roootReducer from './store/reducers/RootReducer';
import { BrowserRouter } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { render } from 'react-dom';
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'


// const firebaseConfig = {
// 	apiKey: "AIzaSyBZj8UNWE0n3jENaDXO_ZQkJd_nz7avMn4",
// 	authDomain: "user-registration-auth.firebaseapp.com",
// 	databaseURL: "https://user-registration-auth-default-rtdb.firebaseio.com",
// 	projectId: "user-registration-auth",
// 	storageBucket: "user-registration-auth.appspot.com",
// 	messagingSenderId: "767274783631",
// 	appId: "1:767274783631:web:21eac3fcfa20ad2897b1fa",
// 	measurementId: "G-2ERKNPWS3Q"
//   };

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
const db = firebase.firestore()
// .settings({ timestampsInSnapshots: true });
const auth = getAuth(app)

// firebase.initializeApp(firebaseConfig);
// firebase.firestore();


const initialState = {};


// const store = createStore(rootReducer, initialState, 
// 	compose(
// 		applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
// 		reduxFirestore(firebaseConfig),
// 		reactReduxFirebase(firebaseConfig)
// 	)
// );

const store2 = createStore(roootReducer); // if it's not a firebase

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store2.dispatch,
	createFirestoreInstance
};

export {auth, db};

// const root = ReactDOM.createRoot(document.getElementById('root'));


render(
		<React.StrictMode>
			<Provider store={store2}>
				<ReactReduxFirebaseProvider {...rrfProps}>
					<BrowserRouter>
						<App/>
					</BrowserRouter>
				</ReactReduxFirebaseProvider>
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
);






