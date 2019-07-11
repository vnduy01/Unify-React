import React, { Component } from 'react';
import { BrowserRouter,Route,Link } from "react-router-dom";

export default class Topbar extends Component {
    render() {
        return (
            <div>
                <div className="topbar-v3">
                    <div className="search-open">
                        <div className="container">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="search-close"><i className="icon-close" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                            </div>
                            <div className="col-sm-6">
                                <ul className="list-inline right-topbar pull-right">
                                    <li><Link to="/"> Account </Link></li>
                                    <li><Link to="/regist">Register</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><i className="search fa fa-search search-button" /></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

