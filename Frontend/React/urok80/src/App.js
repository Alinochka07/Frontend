import React, {useState, useEffect} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header";
import Main from "./main";
import Context from "./Context";


// using useState and useEffect

// function App() {
//   	const [count, setCount] = useState(0);
// 	const [info, setInfo] = useState([
// 		{
// 			name: "Anel",
// 			age: 4
// 		}
// 	])

// 	useEffect(() => {
// 		console.log("Did Update");

// 		return () => {
// 			console.log("completed")
// 		}
// 	})

// 	return (
// 		<div className="App">
// 			<p> Counter:  {count}</p>
// 			<button onClick={() => setCount(count+1)}>Click for counter</button>

// 			<hr/>

// 			{info.map(item => {
// 				return (
// 					<>
// 						<p>Name: {item.name}</p>
// 						<p>Age: {item.age}</p>
// 					</>
// 				)
// 			})}

// 			<button 
// 			onClick={() => setInfo(info => ([...info, {name: "Alina", age: 34}]))}> Click to add an item</button>

			
// 		</div>
// 	);
// }



// Price List using useContext

function App() {

	const [totalPrice, setTotalPrice] = useState(0);
	const counter = (n) => setTotalPrice(totalPrice + n);

	const value = {
		totalPrice,
		counter
	}

	return(
		<Context.Provider value={value}>
			<div className="container py-3">
				<Header />
				<Main />
			</div>
		</Context.Provider>
	
	)
}

export default App;
