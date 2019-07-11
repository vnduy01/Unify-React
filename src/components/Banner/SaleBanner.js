import React, { Component } from 'react';

export default class SaleBanner extends Component {
    render() {
        const salebanner = [
            1, 2
        ];
        return (
            <div className="row margin-bottom-60">
                {salebanner.map((salebanner,index) => 
                    <div class="col-md-6 md-margin-bottom-30">
                        <div class="overflow-h">
                            <div class="illustration-v1 illustration-img1">
                                <div class="illustration-bg">
                                    <div class="illustration-ads ad-details-v1">
                                        <h3>SUMMER <strong>SALE</strong> 30% - 60% <strong>off</strong></h3>
                                        <a class="btn-u btn-brd btn-brd-hover btn-u-light" href="#">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
