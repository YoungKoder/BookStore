import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../../assets/images/Book_Logo_svg.jpg"
import {Link}from "react-router-dom";
// import { Modal } from "../modalWindow/modalWindow";
import { SignInForm } from "../../auth/signInForm";
import { SignUpForm } from "../../auth/signUpForm";
import Modal from "react-modal";
import { ModalTopBar } from "../modalTopBarWithCloseButton/modalTopBar";
import { FormWrapper } from "../formWrapper/formWrapper";

export const Navbar:React.FC<{}> = ()=>{
    Modal.setAppElement('#root');
    const [modalSignInIsOpen,setIsSignInOpen] = useState(false);
    const [modalSignUpIsOpen,setIsSignUpOpen] = useState(false);
    const [modalSuccessSignUpIsOpen, setSuccessModalIsOpen] = useState(false);

    const openSignInModal= ()=> {
        document.body.style.position = "fixed"
        setIsSignInOpen(true);
    }
    const openSignUpModal =()=>{
        setIsSignUpOpen(true);
    }

    const closeSignInForm = () =>{
        setIsSignInOpen(false);
    }
    const closeSignUpForm = () =>{
        setIsSignUpOpen(false);
    }

    const signInToSignUp= ()=>{
        setIsSignInOpen(false);
        setIsSignUpOpen(true);
    }

    const signUpToSignIn = ()=>{
        setIsSignUpOpen(false);
        setIsSignInOpen(true);
    }

    const closeSuccesModal = ()=>{
        setSuccessModalIsOpen(false);
    }
    
    const signUpToSuccesModal = ()=>{
        setIsSignUpOpen(false);
        setSuccessModalIsOpen(true);
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
                                onRequestClose={closeSignInForm}
                                className="Modal"
                            >
                                <ModalTopBar closeModal={closeSignInForm}/>
                                <SignInForm switchToSignUpForm={signInToSignUp}/>
                            </Modal>
                            <i onClick={openSignUpModal} className="fa fa-user" aria-hidden="true"></i>
                            <Modal
                                isOpen={modalSignUpIsOpen}
                                onRequestClose={closeSignUpForm}
                                className="Modal">
                                   <ModalTopBar closeModal={closeSignUpForm}/>
                                    <SignUpForm switchToSignInForm={signUpToSignIn}
                                    switchToSuccessForm={signUpToSuccesModal}/>
                            </Modal>
                            <Modal isOpen={modalSuccessSignUpIsOpen}
                            onRequestClose={closeSuccesModal}
                            className="Modal">
                                <ModalTopBar closeModal={closeSuccesModal}/>
                                <FormWrapper isAuth={false} title="Confirm Your Email Address!">
                                   {
                                       {
                                           content: <div>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur 
                                                    adipisicing elit. Quos quam veritatis deleniti placeat 
                                                    eius, omnis sunt a maiores laborum debitis labore reiciendis 
                                                    ipsa commodi. Dolores similique minus itaque aut est.
                                                </p> 
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                                                    elit. Odio saepe doloremque, quod dicta doloribus 
                                                    asperiores a rem, repellendus eos deleniti cum ratione 
                                                    alias perspiciatis quae aperiam nulla velit, nihil aliquam?
                                                    </p>
                                                </div>
                                       }
                                   }
                                </FormWrapper>
                            </Modal>
                            
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

