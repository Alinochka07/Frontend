import react, {Component} from "react";


// Жизненные циклы
class Test extends Component {
    constructor(props) {

        console.clear()
        console.log("constructor")
        super(props);
        this.state = {
            value: props.argument
        }
        console.log(props)
    }


    btnClick = () => {
        console.log("You have just clicked the button...")
        let valState = this.state.value;
        valState++;

        this.setState({
            value: valState
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")

        return null
        // return ({value: props.argument})
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }


    render() {
        console.log("log1")

        return (
            <>
            {console.log("log2")}
            <button onClick={this.btnClick}>
                Click
            </button>
            <sup>
                Count ({this.state.value})
            </sup>
        </>
        )
    }
}

export default Test;