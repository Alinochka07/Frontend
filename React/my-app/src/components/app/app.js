import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";


function App() {

    const data = [
        {label: "Article # 1", important: true, id: "a1"},
        {label: "Article # 2", important: true, id: "b2"},
        {label: "Article # 3", important: false, id: "c3"},
        {label: "Article # 4", important: false, id: "d5"}


    ]
    return (
        <div className="container blockPanel">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
                
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}




export default App;