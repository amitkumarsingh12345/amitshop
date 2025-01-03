import React from "react";
import Carousel from "./Carousel";
import Featured from "./Featured";
import FeaturedProducts from "./FeaturedProducts";
import Offer from "./Offer";
import Vendor from "./Vendor";
import Category from "./Category";
import RecentProducts from "./RecentProducts";


const Home = () => {
    return (
        <>
            <Carousel />
            <Featured />
            <Category />
            <FeaturedProducts />
            <Offer />
            <RecentProducts />
            <Vendor />
        </>
    )
}

export default Home
