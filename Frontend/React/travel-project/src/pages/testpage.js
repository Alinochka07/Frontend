import React, {Component} from "react";


export default class ChooseDestinationOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            openModal : false,
            tours: [],
            DataisLoaded: false
        }

        this.onClickButton = this.onClickButton.bind(this);
    }


    onClickModalButton = e =>{
        e.preventDefault()
        this.setState({
            openModal : true,
        })
    }
    onClickButton() {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    onCloseModal = ()=>{
        this.setState({openModal : false})
    }


    // componentDidMount() {
    //     fetch("http://localhost:3000/tours")
    //         .then((res) => res.json())
    //         .then((json) => {
    //             this.setState({
    //                 tours: json,
    //                 DataisLoaded: true
    //             });
    //         })
    // }

    // getTours = new FetchTours();

    // toursSelectedData = (data) => {
    //     this.setState({
    //         tours: data
    //     })
    // }

                

    render() {
        const {openModal, onCloseModal} = this.state;
        const {onSelect} = this.props;

        return(
            <div className="destination_option">
                
            </div>
        )
}

}



