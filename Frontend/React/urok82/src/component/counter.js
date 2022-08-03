import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";



const Counter = ({counter, inc, dec, rnd}) => {
    return(
        <div className="jumbotron px-2 py-2 bg-light">
			<h1>{counter}</h1>
			<button className="btn btn-primary" onClick={dec}>DECREMENT</button>
			<button className="btn btn-primary" onClick={inc}>INCREMENT</button>
			<button className="btn btn-primary" onClick={rnd}>RANDOM</button>
		</div>
    )
}

const mapStoreToProps = (state) => {
	return {
		counter: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return (bindActionCreators(actions, dispatch))
}

export default connect(mapStoreToProps, mapDispatchToProps)(Counter);