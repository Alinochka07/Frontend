import React from "react";
import { createRoot } from 'react-dom/client';
import {createStore} from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducer";
import App from "./component/app";



// using createStore...
const store = createStore(reducer);
// const {dispatch} = store;

// Вместо нижней функции вызова bindActionCreators мы импортировали его сверху.
// const bindActionCreator = (creator, dispatch) => (...args) => {
// 	dispatch(creator(args))
// }

// const {inc, dec, rnd} = bindActionCreators(actions, dispatch
// )

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
	<Provider store={store}>
		<App/>
	</Provider>
);


// store.subscribe(update_counter);




