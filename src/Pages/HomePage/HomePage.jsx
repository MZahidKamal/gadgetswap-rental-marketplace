import React from 'react';
import BannerComponent from "../../Components/BannerComponent/BannerComponent.jsx";
import CategoryComponent from '../../Components/HomePageComponent/CategoryComponent/CategoryComponent.jsx';

const HomePage = () => {
    return (
        <div className={'text-5xl font-bold'}>
            <BannerComponent></BannerComponent>
            <CategoryComponent></CategoryComponent>
        </div>
    );
};

export default HomePage;
