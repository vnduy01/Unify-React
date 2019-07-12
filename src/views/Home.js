import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Slider from '../components/Slider/Slider';
import SaleBanner from '../components/Banner/SaleBanner';
import ProductItem from '../components/Item/ProductItem';
import CategoryItem from '../components/Item/CategoryItem';
import CollectionBanner from '../components/Banner/CollectionBanner';
import TwitterBlock from '../components/TwitterBlock/TwitterBlock';
import ProductService from '../components/ProductService/ProductService';
import Illustrationv5 from '../components/Illustrationv5/Illustrationv5';
import Sponsors from '../components/Sponsors/Sponsors';


export default class Home extends Component {

    render() {

        const categories = [
            {
                name: "Men",
                amount: "450"
            },
            {
                name: "Men1",
                amount: "450"
            },
            {
                name: "Men2",
                amount: "450"
            },
        
        ];

        const products = [
            {
                name: "name1",
                gender: "man",
                category: "cate1",
                price: "300$"
            },
            {
                name: "name2",
                gender: "man",
                category: "cate2",
                price: "300$"
            },
            {
                name: "name3",
                gender: "man",
                category: "cate3",
                price: "300$"
            },
            {
                name: "name4",
                gender: "man",
                category: "cate4",
                price: "300$"
            },
            {
                name: "name5",
                gender: "man",
                category: "cate5",
                price: "300$"
            },
        ];

        return (
            <BrowserRouter>
                <div>
                    <div className="wrapper">

                        <Slider />
                        <div className="container content-md">
                            <SaleBanner />
                            <div className="heading heading-v1 ymargin-bottom-20">
                                <h2>Featured products</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio elit, ultrices vel cursus sed, placerat ut leo. Phasellus in magna erat. Etiam gravida convallis augue non tincidunt. Nunc lobortis dapibus neque quis lacinia. Nam dapibus tellus sit amet odio venenatis</p>
                            </div>                            

                            <div className="illustration-v2 margin-bottom-60">
                                <div className="customNavigation margin-bottom-25">
                                    <a className="owl-btn prev rounded-x"><i className="fa fa-angle-left" /></a>
                                    <a className="owl-btn next rounded-x"><i className="fa fa-angle-right" /></a>
                                </div>
                                <ul className="list-inline owl-slider">
                                {products.map((product, index) => {
                                    return (
                                        <div key={index}>
                                            <ProductItem product={product} />
                                        </div>
                                    )
                                })}
                                </ul>
                            </div>

                            <div className="row margin-bottom-50">
                                {categories.map((category, index) => {
                                    return (
                                        <div key={index}>
                                            <CategoryItem category={category} />
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="heading heading-v1 margin-bottom-40">
                                <h2>Latest products</h2>
                            </div>
                            <div className="illustration-v2 margin-bottom-60">
                                <div className="customNavigation margin-bottom-25">
                                    <a className="owl-btn prev rounded-x"><i className="fa fa-angle-left" /></a>
                                    <a className="owl-btn next rounded-x"><i className="fa fa-angle-right" /></a>
                                </div>
                                <ul className="list-inline owl-slider">
                                {products.map((product, index) => {
                                    return (
                                        <div key={index}>
                                            <ProductItem product={product} />
                                        </div>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>
                        <TwitterBlock />
                        <div className="container">
                            <ProductService />
                            <Illustrationv5 />
                        </div>
                        <CollectionBanner />
                        <Sponsors />

                    </div>
                </div>
            </BrowserRouter>
        )
    }
}