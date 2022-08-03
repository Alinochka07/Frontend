import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const AppDiv = styled.div`
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    margin-top: 70px;
                    
                    h6 {
                        font-size: 14px;
                        font-weight: normal;
                        :hover {
                            color: red;
                        }
                    }
                    
                    `;

// const AppDiv2 = styled(AppDiv)`
//                 background-color: yellow;
//                 `;



const AppHeader = ({allPosts, likes}) => {
    return (
        // <div className="app-header d-flex">
        <AppDiv>
            {/* <AppDiv2 as="a" href="#">AppDiv2</AppDiv2> */}
            <h3>Alina Akylbekova</h3>
            <h6>{allPosts} note(s), {likes} like(s)</h6>
            {/* <h6>
                <Link to="/about">About Us</Link>
            </h6> */}
        </AppDiv>
    )
}


export default AppHeader;