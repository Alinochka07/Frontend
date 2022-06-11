import {createStore} from "redux";


const reducer = (state = 0, action) => {

	switch (action.type) {
		case "INCREMENT":
			return state + 1;

		case "DECREMENT":
			return state - 1;

		case "RANDOM":
			return state + action.value;

	default:
		return state;
	}
}


// using creating variables and defining action in there...

// let state = reducer(undefined, {type: "INCREMENT"})
// console.log(state);

// state = reducer(state, {type: "DECREMENT"})
// console.log(state);




// let's show the same result using createStore...
const store = createStore(reducer);
// store.subscribe(() => {
// 	console.log(store.getState());
// })

// store.dispatch({type: "INCREMENT"});
// store.dispatch({type: "INCREMENT"});
// store.dispatch({type: "DECREMENT"});

const dec = () => ({type: "DECREMENT"});
const inc = () => ({type: "INCREMENT"});
const rnd = (value) => ({type: "RANDOM", value})

document.getElementById("dec").addEventListener("click", () => {
	store.dispatch(dec())
});

document.getElementById("inc").addEventListener("click", () => {
	store.dispatch(inc());
});

document.getElementById("rnd").addEventListener("click", () => {
	const valueRandom = Math.floor(Math.random() * 10)
	store.dispatch(rnd(valueRandom));
});


const update_counter = () => {
	document.getElementById("counter").textContent = store.getState();
}
store.subscribe(update_counter);