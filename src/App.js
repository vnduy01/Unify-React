import React, { Component } from 'react';
import                           './App.css';
import { BrowserRouter as  Router } from 'react-router-dom';
import Topbar               from './components/Auth/Topbar';
import Header               from './layouts/Header';
import Footer               from './layouts/Footer';
import RouterProtect        from './RouterProtect';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Topbar/>
                <Header/>
                <RouterProtect/>
                <Footer/>
            </Router>
        );
    }
}
