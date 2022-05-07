import React from "react";
import { Button } from "reactstrap";


const PostStatusFilter = () => {
    return (
        <div className="button-group">
            <Button color="warning" outline>All notes</Button>{' '}
            <Button color="warning">Liked notes</Button>{' '}
        </div>
    )
}


export default PostStatusFilter;