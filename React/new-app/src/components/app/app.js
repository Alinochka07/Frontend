import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "Article # 1", important: true, id: "a1"},
                {label: "Article # 2", important: true, id: "b2"},
                {label: "Article # 3", important: false, id: "c3"},
                {label: "Article # 4", important: false, id: "d5"}
        
        
            ]
        }
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elements => elements.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index +1);

            const newData = [...before, ...after];

            return {
                data: newData
            }
        });
        
    }

    render() {
        return (
        <div className="container blockPanel">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
                
            </div>
            <PostList posts={this.state.data}
            onDelete={this.onDelete}
            />
            <PostAddForm/>
        </div>
        )
    }


}


