import React, {useContext,useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { SignUpPage } from '../pages/signUpPage';
import { SignInPage } from '../pages/signInPage';
import { HomePage } from '../pages/homePage/homePage';



const App =()=>{
    return(
        <Switch>
            <Route path="/"  component={HomePage} exact/>
            <Route path="/signUp" render={()=><SignUpPage/>}/>
            <Route path="/signIn" render={()=><SignInPage/>}/>
        </Switch>
    )
}
export default App;