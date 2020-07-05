import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { HomePage } from '../pages/homePage/homePage';
import { Navbar } from '../dumyComponents/navbar/navbar';
import 'font-awesome/css/font-awesome.min.css';
import { Header } from '../dumyComponents/header/header';
import { EditionCardInfo } from '../printingEditionCardInfo/editionCardInfo';
import ModalController from "../modalController/modalController";
import store from '../../store';

const App =()=>{
    return(
        <>
            <main role="main" className="container-fluid">
                <div className="row">
                    <Router>
                        <Route path="/" component={Navbar}/>
                        <Route path="/" component={Header}/>
                        <Route exact path="/"  component={HomePage} />
                        <Route  path="/:id" render={({match})=>{
                            const{id} = match.params;
                            return <EditionCardInfo matchedId = {id}/>
                        }}/>
                    </Router>
                    <ModalController/>
                </div>
            </main>
        </>
    )
}
export default App;