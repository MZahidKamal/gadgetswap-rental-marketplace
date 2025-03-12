import {StrictMode} from 'react'
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import MainLayout from "./Layouts/MainLayout.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import SignUpPage from "./Pages/SignUpPage/SignUpPage.jsx";
import SignInPage from "./Pages/SignInPage/SignInPage.jsx";


const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainLayout></MainLayout>}>
                    <Route path={'/'} element={<HomePage></HomePage>}></Route>
                    <Route path={'/about'} element={<AboutPage></AboutPage>}></Route>
                    <Route path={'/sign-up'} element={<SignUpPage></SignUpPage>}></Route>
                    <Route path={'/sign-in'} element={<SignInPage></SignInPage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
