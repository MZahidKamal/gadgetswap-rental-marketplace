import React from 'react';
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent.jsx";
import FooterComponent from "../Components/FooterComponent/FooterComponent.jsx";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div>

            <div className='mb-[64px]'>
                <NavbarComponent></NavbarComponent>
            </div>

            <Outlet></Outlet>
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default MainLayout;
