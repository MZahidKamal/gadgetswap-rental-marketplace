import React from 'react';
import BannerComponent from "../../Components/BannerComponent/BannerComponent.jsx";
import CategoryComponent from '../../Components/HomePageComponent/CategoryComponent/CategoryComponent.jsx';
import AddReview from '../../Components/HomePageComponent/ReviewsComponents/AddReview.jsx';
import ShowReview from '../../Components/HomePageComponent/ReviewsComponents/ShowReview.jsx';

const HomePage = () => {
    return (
        <div className={'text-5xl font-bold'}>
            <BannerComponent></BannerComponent>
            <CategoryComponent></CategoryComponent>
            <AddReview></AddReview>
            <ShowReview></ShowReview>
        </div>
    );
};

export default HomePage;
