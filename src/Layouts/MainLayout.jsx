import React from 'react';
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent.jsx";
import FooterComponent from "../Components/FooterComponent/FooterComponent.jsx";
import {Outlet} from "react-router";

const MainLayout = () => {
    return (
        <div className={'container mx-auto'}>
            <NavbarComponent></NavbarComponent>
            <Outlet></Outlet>
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default MainLayout;
