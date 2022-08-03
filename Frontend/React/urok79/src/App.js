import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./counter";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    
  }

  render() {

    const {count} = this.state;
    
    return(
      <div className=" container row">
        <Counter
        count={count}
        onCountUp={() => this.setState({count: count+1})}
        onCountDown={() => this.setState({count: count-1})}/>
      </div>
    )
  }
}

export default App;
