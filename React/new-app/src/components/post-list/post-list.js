import React from "react";
import PostListItem from "../post-list-item";

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <div key={id}>
                <PostListItem {...itemProps}
                onDelete={() => onDelete(id)}
                />
            </div>
        )
    });
    return (
        <div className="app-list list-group">
            {elements}
        </div>
    )
}


export default PostList;
