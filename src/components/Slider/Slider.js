import React, { Component } from 'react';

export default class Slider extends Component {
    render() {
        return (
            <div className="tp-banner-container">
                <div className="tp-banner">
                    <ul>
                        {/* SLIDE */}
                        <li className="revolution-mch-1" data-transition="fade" data-slotamount={5} data-masterspeed={1000} data-title="Slide 1">
                            {/* MAIN IMAGE */}
                            <img src="assets/img/1.jpg" alt="darkblurbg" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />
                            <div className="tp-caption revolution-ch1 sft start" data-x="center" data-hoffset={0} data-y={100} data-speed={1500} data-start={500} data-easing="Back.easeInOut" data-endeasing="Power1.easeIn" data-endspeed={300}>
                                The New <br />
                                <strong>Collection</strong><br />
                                is here
                            </div>
                            {/* LAYER */}
                            <div className="tp-caption sft" data-x="center" data-hoffset={0} data-y={380} data-speed={1600} data-start={1800} data-easing="Power4.easeOut" data-endspeed={300} data-endeasing="Power1.easeIn" data-captionhidden="off" style={{zIndex: 6}}>
                                <a href="#" className="btn-u btn-brd btn-brd-hover btn-u-light">Shop Now</a>
                            </div>
                        </li>
                        {/* END SLIDE */}
                        {/* SLIDE */}
                        <li className="revolution-mch-1" data-transition="fade" data-slotamount={5} data-masterspeed={1000} data-title="Slide 2">
                            {/* MAIN IMAGE */}
                            <img src="assets/img/5.jpg" alt="darkblurbg" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />
                            <div className="tp-caption revolution-ch3 sft start" data-x="center" data-hoffset={0} data-y={140} data-speed={1500} data-start={500} data-easing="Back.easeInOut" data-endeasing="Power1.easeIn" data-endspeed={300}>
                                Latest <strong>Fashion</strong> Trends
                            </div>
                            {/* LAYER */}
                            <div className="tp-caption revolution-ch4 sft" data-x="center" data-hoffset={-14} data-y={210} data-speed={1400} data-start={2000} data-easing="Power4.easeOut" data-endspeed={300} data-endeasing="Power1.easeIn" data-captionhidden="off" style={{zIndex: 6}}>
                                Cras non dui et quam auctor pretium.<br />
                                Aenean enim tortr, tempus et iteus m
                            </div>
                            {/* LAYER */}
                            <div className="tp-caption sft" data-x="center" data-hoffset={0} data-y={300} data-speed={1600} data-start={1800} data-easing="Power4.easeOut" data-endspeed={300} data-endeasing="Power1.easeIn" data-captionhidden="off" style={{zIndex: 6}}>
                                <a href="#" className="btn-u btn-brd btn-brd-hover btn-u-light">Shop Now</a>
                            </div>
                        </li>
                        {/* END SLIDE */}
                        {/* SLIDE */}
                        <li className="revolution-mch-1" data-transition="fade" data-slotamount={5} data-masterspeed={1000} data-title="Slide 3">
                            {/* MAIN IMAGE */}
                            <img src="assets/img/3.jpg" alt="darkblurbg" data-bgfit="cover" data-bgposition="right top" data-bgrepeat="no-repeat" />
                            <div className="tp-caption revolution-ch3 sft start" data-x="right" data-hoffset={5} data-y={130} data-speed={1500} data-start={500} data-easing="Back.easeInOut" data-endeasing="Power1.easeIn" data-endspeed={300}>
                                <strong>Luxury</strong> Watches
                            </div>
                            {/* LAYER */}
                            <div className="tp-caption revolution-ch4 sft" data-x="right" data-hoffset={0} data-y={210} data-speed={1400} data-start={2000} data-easing="Power4.easeOut" data-endspeed={300} data-endeasing="Power1.easeIn" data-captionhidden="off" style={{zIndex: 6}}>
                                lectus. Cras non dui et quam auctor.<br />
                                Aenean enim tortor, tempus et im
                            </div>
                            {/* LAYER */}
                            <div className="tp-caption sft" data-x="right" data-hoffset={0} data-y={300} data-speed={1600} data-start={2800} data-easing="Power4.easeOut" data-endspeed={300} data-endeasing="Power1.easeIn" data-captionhidden="off" style={{zIndex: 6}}>
                                <a href="#" className="btn-u btn-brd btn-brd-hover btn-u-light">Shop Now</a>
                            </div>
                        </li>
                        {/* END SLIDE */}
                        {/* SLIDE */}
                        <li className="revolution-mch-1" data-transition="fade" data-slotamount={5} data-masterspeed={1000} data-title="Slide 4">
                            {/* MAIN IMAGE */}
                            <img src="assets/img/2.jpg" alt="darkblurbg" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />
                            <div className="tp-caption revolution-ch1 sft start" data-x="center" data-hoffset={0} data-y={100} data-speed={1500} data-start={500} data-easing="Back.easeInOut" data-endeasing="Power1.easeIn" data-endspeed={300}>
                                Girl's Accesories
                            </div>
                            {/* LAYER */}
                            <div className="tp-caption revolution-ch2 sft" data-x="center" data-hoffset={0} data-y={280} data-speed={1400} data-start={2000} data-easing="Power4.easeOut" data-endspeed={300} data-endeasing="Power1.easeIn" data-captionhidden="off" style={{zIndex: 6}}>
                                Super Promo
                            </div>
                            {/* LAYER */}
                            <div className="tp-caption sft" data-x="center" data-hoffset={0} data-y={370} data-speed={1600} data-start={2800} data-easing="Power4.easeOut" data-endspeed={300} data-endeasing="Power1.easeIn" data-captionhidden="off" style={{zIndex: 6}}>
                                <a href="#" className="btn-u btn-brd btn-brd-hover btn-u-light">View More</a>
                                <a href="#" className="btn-u btn-brd btn-brd-hover btn-u-light">Shop Now</a>
                            </div>
                        </li>
                        {/* END SLIDE */}
                        {/* SLIDE */}
                        <li className="revolution-mch-1" data-transition="fade" data-slotamount={5} data-masterspeed={1000} data-title="Slide 5">
                            {/* MAIN IMAGE */}
                            <img src="assets/img/4.jpg" alt="darkblurbg" data-bgfit="cover" data-bgposition="right top" data-bgrepeat="no-repeat" />
                            <div className="tp-caption revolution-ch5 sft start" data-x="right" data-hoffset={5} data-y={130} data-speed={1500} data-start={500} data-easing="Back.easeInOut" data-endeasing="Power1.easeIn" data-endspeed={300}>
                                <strong>Jeans</strong> Collection
                            </div>
                            {/* LAYER */}
                            <div className="tp-caption revolution-ch4 sft" data-x="right" data-hoffset={-14} data-y={210} data-speed={1400} data-start={2000} data-easing="Power4.easeOut" data-endspeed={300} data-endeasing="Power1.easeIn" data-captionhidden="off" style={{zIndex: 6}}>
                                Cras non dui et quam auctor pretium.<br />
                                Aenean enim tortr, tempus et iteus m
                            </div>
                            {/* LAYER */}
                            <div className="tp-caption sft" data-x="right" data-hoffset={0} data-y={300} data-speed={1600} data-start={2800} data-easing="Power4.easeOut" data-endspeed={300} data-endeasing="Power1.easeIn" data-captionhidden="off" style={{zIndex: 6}}>
                                <a href="#" className="btn-u btn-brd btn-brd-hover btn-u-light">Shop Now</a>
                            </div>
                        </li>
                        {/* END SLIDE */}
                    </ul>
                    <div className="tp-bannertimer tp-bottom" />
                </div>
            </div>
        );
    }
}