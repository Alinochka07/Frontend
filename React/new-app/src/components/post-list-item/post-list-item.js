import React, {Component} from "react";


export default class PostListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            important: false,
            like: false
        }

        this.addImportant = this.addImportant.bind(this)
        this.addLike = this.addLike.bind(this)
    }

    addImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    addLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {

        const {label, onDelete} = this.props;
        const {important, like} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";

        if (important) {
            classNames += " important";
        }
        if (like) {
            classNames += " like";
        }
        

        return (
            <div className={classNames}>
                <span className="app-list-item-label" onClick={this.addLike}>{label}{important}</span>
                <div className="d-flex justify-content-center align-items-center">
                    <i className="bi bi-star-fill" onClick={this.addImportant}></i>
                    <i className="bi bi-heart-fill" onClick={this.addLike}></i>
                    <i className="bi bi-trash" onClick={onDelete}></i>
                </div>
            </div>
        )
    }
}



