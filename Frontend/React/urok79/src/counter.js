import React from "react";
import HocCounter from "./hoc-counter";


function Counter({count, onCountUp, onCountDown}) {
  
    return(
      <div className="counter btn-group">
        <button className="btn btn-success btn-lg" onClick={onCountUp}>+</button>
          
          <span className="btn btn-info btn-lh active">{count}</span>

        <button className="btn btn-danger btn-lg" onClick={onCountDown}>-</button>
      </div>
    )
}


export default HocCounter(Counter);