import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { SignUpPage } from '../pages/signUpPage';
import { SignInPage } from '../pages/signInPage';
import { HomePage } from '../pages/homePage/homePage';
import { Navbar } from '../dumyComponents/navbar/navbar';
import 'font-awesome/css/font-awesome.min.css';
import { Header } from '../dumyComponents/header/header';
import { EditionCardInfo } from '../printingEditionCardInfo/editionCardInfo';
import store from '../../store';
import { PrintingEdition } from '../../types/printingEdition';


const App =()=>{

    const editions:PrintingEdition[] = store.getState().printingEdition.uploadPrintingEditions;
    return(
        <>
            <main role="main" className="container-fluid">
                <div className="row">
                    <Router>
                        <Route path="/" component={Navbar}/>
                        <Route path="/" component={Header}/>
                        <Route path="/"  component={HomePage} />
                        <Route path="/:id" render={({match})=>{
                            const{id} = match.params;
                            let checker;
                            editions.forEach(element => {
                                if(element._id === id){
                                    checker = true;
                                    return;
                                }
                                checker = false;
                            });
                            if(checker === true){
                                return <EditionCardInfo matchedId = {id}/>
                            }
                        }}/>
                    </Router>
                </div>
            </main>
        </>
    )
}
export default App;