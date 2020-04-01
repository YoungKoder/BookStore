import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { SignUpPage } from '../pages/signUpPage';

const App =()=>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact render={()=> <h2>You are on HomePAge</h2>}/>
                <Route path="/signUp" render={()=><SignUpPage/>}/>
            </Switch>
        </Router>
    )
}
export default App;