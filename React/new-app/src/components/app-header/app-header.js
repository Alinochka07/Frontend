import React from "react";
import styled from "styled-components";


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

const AppDiv2 = styled(AppDiv)`
                background-color: yellow;
                `;



const AppHeader = () => {
    return (
        // <div className="app-header d-flex">
        <AppDiv>
            <AppDiv2 as="a" href="#">AppDiv2</AppDiv2>
            <h3>Alina Akylbekova</h3>
            <h6>3 notes, 0 likes</h6>
        </AppDiv>
    )
}


export default AppHeader;