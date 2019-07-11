import React, {Component} from 'react';
import { BrowserRouter,Route,Link } from "react-router-dom";
import CollectionBanner from '../components/Banner/CollectionBanner';
import Slider           from '../components/Slider/Slider';
import SaleBanner       from '../components/Banner/SaleBanner';
import ProductItem      from '../components/Item/ProductItem';
import CategoryItem     from '../components/Item/CategoryItem';
import TwitterBlock     from '../components/TwitterBlock/TwitterBlock';
import ProductService   from '../components/ProductService/ProductService';
import Illustrationv5   from '../components/Illustrationv5/Illustrationv5';
import Sponsors         from '../components/Sponsors/Sponsors';


export default class Home extends Component {
    
    render() {

        return(
            <BrowserRouter>
                <div>
               <div className="wrapper">
                   
                   <Slider/>
                   <div className="container content-md">
                       <SaleBanner/>
                       <div className="heading heading-v1 margin-bottom-20">
                           <h2>Featured products</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio elit, ultrices vel cursus sed, placerat ut leo. Phasellus in magna erat. Etiam gravida convallis augue non tincidunt. Nunc lobortis dapibus neque quis lacinia. Nam dapibus tellus sit amet odio venenatis</p>
                       </div>    
                            <ProductItem/>
                            <CategoryItem/>
                       <div className="heading heading-v1 margin-bottom-40">
                           <h2>Latest products</h2>
                       </div>
                            <ProductItem/>
                   </div>
                        <TwitterBlock/>
                   <div className="container">
                        <ProductService/>
                        <Illustrationv5/>
                   </div>
                        <CollectionBanner/>
                        <Sponsors/>
                        
               </div>
           </div>
            </BrowserRouter>
        )
    }
}