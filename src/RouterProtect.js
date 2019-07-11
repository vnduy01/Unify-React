import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import FormLogin from "./components/Auth/FormLogin";
import FormRegist from "./components/Auth/FormRegist";
import Home from './views/Home';
import ProductList from './views/ProductList';
import ProductDetails from './views/ProductDetails';

class RouterProtect extends Component {
    render() {
        return (
            <Switch>

                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={FormLogin}/>
                <Route exact path="/regist" component={FormRegist}/>
                <Route exact path="/products" component={ProductList}/>
                <Route exact path="/product/details" component={ProductDetails}/>

            </Switch>
        )
    }
}
export default RouterProtect;

