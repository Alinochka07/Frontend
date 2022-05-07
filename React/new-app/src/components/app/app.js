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
                {label: "Article # 1", important: true, like: false, id: 1},
                {label: "Article # 2", important: false, like: false, id: 2},
                {label: "Article # 3", important: false, like: false, id: 3},
                {label: "Article # 4", important: false, like: false, id: 4}
            ],

            searchValue: "",
            filter: ""
        }

        // Bindings
        this.onDelete = this.onDelete.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearchPanel = this.onUpdateSearchPanel.bind(this);
        this.onUpdateFilter = this.onUpdateFilter.bind(this);

        this.id = 5;
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

    addItem(text) {
        const newItem = {
            label: text,
            important: false,
            id: this.id++
        }

        this.setState(({data}) => {
            const newArray = [...data, newItem];

            return {
                data: newArray
            }
        })

    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elements => elements.id === id);

            const impBefore = data[index];
            const newImportant = {...impBefore, important: !impBefore.important};

            const newImportantData = [...data.slice(0, index) , newImportant, ...data.slice(index +1)];

            return {
                data: newImportantData
            }
        });
    }

    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elements => elements.id === id);

            const likeBefore = data[index];
            const newLike = {...likeBefore, like: !likeBefore.like};

            const newLikeData = [...data.slice(0, index) , newLike, ...data.slice(index +1)];

            return {
                data: newLikeData
            }
        });
    }

    searchPost(items, searchValue) {
        if(searchValue.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(searchValue) > -1
        })
    }

    onUpdateSearchPanel(value) {
        this.setState({
            searchValue: value
        })
    }


    filterPost(items, filter) {
        if(filter === "like") {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateFilter(value) {
        this.setState({
            filter: value
        })
    }

    render() {

        const{data, searchValue, filter} = this.state;
        
        const searchPost = this.filterPost(this.searchPost(data, searchValue), filter);
        const likes = data.filter(item => item.like).length;
        const allItems = searchPost.length;
        

        return (
        <div className="container blockPanel">
            <AppHeader 
            allPosts={allItems}
            likes={likes}
            />
            <div className="search-panel d-flex">
                <SearchPanel
                onUpdateSearchPanel={this.onUpdateSearchPanel}
                />
                <PostStatusFilter
                filter={filter}
                onUpdateFilter={this.onUpdateFilter}
                />
                
            </div>
            <PostList 
            posts={searchPost}
            onDelete={this.onDelete}
            onToggleImportant={this.onToggleImportant}
            onToggleLike={this.onToggleLike}
            />
            <PostAddForm
            addItem={this.addItem}
            />
        </div>
        )
    }


}


