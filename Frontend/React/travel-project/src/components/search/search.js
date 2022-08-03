import React, { Component} from "react";
// import { TouchableOpacity, View, Image } from 'react-native-web';
import "./search.css";
 

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default class SearchFunction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
       }
       this.onOpenInput = this.onOpenInput.bind(this)
    }
    
    onOpenInput() {
        this.setState({
            hidden: !this.state.hidden
        })
        
  }
    


    render() {
        return (
            <div className="input-group mb-3">
                <form>
                    <span>
                        <input type="search" hidden={ !this.state.hidden ?  true : false } className="input_search" placeholder="Поиск..."/>
                        <button type="button" className="searchbtn"><span className="bi bi-search" onClick={this.onOpenInput}></span></button>
                    </span>
                </form>
            </div>
        )
    }

}
