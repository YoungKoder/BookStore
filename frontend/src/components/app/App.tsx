import React, {useContext,useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { SignUpPage } from '../pages/signUpPage';
import { SignInPage } from '../pages/signInPage';
import { HomePage } from '../pages/homePage/homePage';
import { Navbar } from '../dumyComponents/navbar/navbar';
import 'font-awesome/css/font-awesome.min.css';


const App =()=>{
    return(
        <>  
            <Navbar/>
            <main role="main" className="container-fluid">
                <div className="container">
                <Switch>
                    <Route path="/"  component={HomePage} exact/>
                    <Route path="/signUp" render={()=><SignUpPage/>}/>
                    <Route path="/signIn" render={()=><SignInPage/>}/>
                </Switch>
                </div>
            </main>
        </>
    )
}
export default App;