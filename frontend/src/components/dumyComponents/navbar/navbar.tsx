import React from "react";
import "./navbar.scss";
import logo from "../../../assets/images/Book_Logo_svg.jpg"
import {Link}from "react-router-dom";
// import { Modal } from "../modalWindow/modalWindow";
import { SignInForm } from "../../auth/signInForm";
import { SignUpForm } from "../../auth/signUpForm";
import Modal from "react-modal";

export const Navbar:React.FC<{}> = ()=>{
    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
          }
    }

    Modal.setAppElement('#root');
    const [modalSignInIsOpen,setIsSignInOpen] = React.useState(false);
    const [modalSignUpIsOpen,setIsSignUpOpen] = React.useState(false);

    const openSignInModal= ()=> {
        setIsSignInOpen(true);
    }
    const openSignUpModal =()=>{
        setIsSignUpOpen(true);
    }

    const closeModal= ()=>{
        console.log("i am trying to switch modal");
        setIsSignInOpen(false);
        setIsSignUpOpen(true);
    }
    
    return(
        <div className="container-fluid navbar">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <Link to="/" className="d-flex"><img src={logo} alt="logo"/></Link>
                    <div className="navbar_rightContent align-items-center d-flex ">
                        <div className="login d-flex align-items-center ">
                        <span className="signInTrigger" onClick={openSignInModal}>Login</span>
                            <Modal 
                                isOpen={modalSignInIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                // className="modalF"
                            >
                                <SignInForm closeModal={closeModal}/>
                            </Modal>
                            <i onClick={openSignUpModal} className="fa fa-user" aria-hidden="true"></i>
                            <Modal
                                isOpen={modalSignUpIsOpen}
                                style={customStyles}>
                                    <SignUpForm/>
                            </Modal>
                            {/* <Modal>
                                {
                                    {
                                        trigger: <span className="signInTrigger">Login</span>,
                                        content:<SignInForm />
                                    }
                                }
                            </Modal> */}
                            {/* <Modal>
                                {
                                    {
                                        trigger: <i className="fa fa-user" aria-hidden="true"></i>,
                                        content:<SignUpForm/>
                                    }
                                }
                            </Modal> */}
                            
                        </div>
                        <div className="basket">
                            <Link className="basket-btn icon" to="/" data-badge="6">
                                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

