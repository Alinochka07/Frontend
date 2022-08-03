import React, {Component} from "react";
import styled from "styled-components";
import Loader from "../loader";
import { Modal } from "reactstrap";
import { Flex } from 'theme-ui';


const ModalWindow = (props) => {
    const   {modalVisible,
            onCloseWindow,
            modalContent,
            modalContent: {first_name, last_name, email, avatar, info}
            } = props;

    

    return (
        <SModal>
            visible={modalVisible}
            onCancel={onCloseWindow}
            header={false}
            footer={false}

            <Header>
                <div className="modal-header">
                    <h3 className="modal-title">{first_name} {last_name}</h3>
                </div>
            </Header>

            {
                modalContent.id ?
                <div className="modal-body">
                    <div className="modal-content">
                        <img src={avatar} alt={first_name} width="180px" height="180px"></img>
                        <span>{first_name} {last_name}</span>
                        <span><a href={"mailto:" + email}>{email}</a></span>
                        <p>{info}</p>
                    </div>
                </div>
                :
                <Loader/>
            }
        </SModal>
    )
}

export default ModalWindow

const SModal = styled(Modal)`
                flex-direction: column;
                background: #fff;
                border-radius: 5px;`

const Header = styled(Flex)`
                width: 100%;
                height: 100%;`;



                
// export default class ModalWindow extends Component {

//     render() {
//         const {modalVisible, onCloseWindow, modalContent, modalContent: {first_name, last_name, email, avatar, info}} = this.props;
//         let content, body;
        
//         if(modalContent.length !== 0) {
//             body = <Content first_name={first_name} last_name={last_name} email={email} avatar={avatar} onCloseWindow={onCloseWindow} info={info}></Content>
//         } else {
//             body = <Loader/>
//         }

//         if(modalVisible) {
//             content =   <>
//                             <div className="modal" aria-hidden="true">
                            
//                                 <div className="modal-dialog">
//                                 <span className="modal-close right" onClick={onCloseWindow}>x</span>
//                                     {body}
//                                 </div>
//                             </div>
                            
//                         </>
//         } else {
//             content = null
//         }
//         return (content);
//     }

    
// }
// const Content = ({first_name, last_name, email, avatar, onCloseWindow, info}) => {
//     return (<>
//                 <div className="modal-header">
//                     <h3 className="modal-title">{first_name} {last_name}</h3>
//                 </div>
//                 <div className="modal-body">
//                     <div className="modal-content">
//                         <img src={avatar} alt={first_name} width="180px" height="180px"></img>
//                         <span>{first_name} {last_name}</span>
//                         <span><a href={"mailto:" + email}>{email}</a></span>
//                         <p>{info}</p>
//                     </div>
//                 </div>
//                 <div className="modal-footer">
//                     <button type="button" className="btn btn-success" onClick={onCloseWindow}>Close</button>
//                 </div>
//             </>
//     )
// }
