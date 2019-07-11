import React, {Component} from 'react';

export default class Panel extends Component {
    render() {
        return(
            
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                        <div class="panel-heading">
                            <h2 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                    Brands
                                    <i class="fa fa-angle-down"></i>
                                </a>
                            </h2>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in">
                            <div class="panel-body">
                                <ul class="list-unstyled checkbox-list">
                                    <li>
                                        <label class="checkbox">
                                            <input type="checkbox" name="checkbox" checked />
                                            <i></i>
                                            Calvin Klein
                                            <small><a href="#">(23)</a></small>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="checkbox">
                                            <input type="checkbox" name="checkbox" checked />
                                            <i></i>
                                            Gucci
                                            <small><a href="#">(4)</a></small>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="checkbox">
                                            <input type="checkbox" name="checkbox" />
                                            <i></i>
                                            Adidas
                                            <small><a href="#">(11)</a></small>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="checkbox">
                                            <input type="checkbox" name="checkbox" />
                                            <i></i>
                                            Puma
                                            <small><a href="#">(3)</a></small>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="checkbox">
                                            <input type="checkbox" name="checkbox" />
                                            <i></i>
                                            Zara
                                            <small><a href="#">(87)</a></small>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}