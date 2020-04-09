import React, {useContext,useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { SignUpPage } from '../pages/signUpPage';
import { SignInPage } from '../pages/signInPage';
import { HomePage } from '../pages/homePage/homePage';
import { Navbar } from '../dumyComponents/navbar/navbar';
import 'font-awesome/css/font-awesome.min.css';
import { Header } from '../dumyComponents/header/header';


const App =()=>{
    return(
        <>
            <main role="main" className="container-fluid">
                <div className="row">
                    <Router>
                        <Route path="/" component={Navbar}/>
                        <Route path="/" component={Header}/>
                        <Route path="/"  component={HomePage} exact/>
                        <Route path="/signUp" render={()=><SignUpPage/>}/>
                        <Route path="/signIn" render={()=><SignInPage/>}/>
                    </Router>
                </div>
            </main>
        </>
    )
}
export default App;