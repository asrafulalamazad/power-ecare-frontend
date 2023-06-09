import React, {Fragment} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/Dashboard-Page";
import CreatePage from "./pages/Create-Page";
import NewPage from "./pages/New-Page";
import ProgressPage from "./pages/Progress-Page";
import CompletedPage from "./pages/Completed-Page";
import CanceledPage from "./pages/Canceled-Page";
import ProfilePage from "./pages/Profile-Page";
import LoginPage from "./pages/Login-Page";
import RegistrationPage from "./pages/Registration-Page";
import ForgetpassPage from "./pages/Forgetpass-Page";
import Page404 from "./pages/Page-404";
import FullscreenLoader from "./components/masterLayout/Fullscreen-Loader";
import {getToken} from "./helper/SessionHelper";


const App = () => {

    if(getToken()){
        return(
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<DashboardPage/>}/>
                        <Route exact path="/Create" element={<CreatePage/>}/>
                        <Route exact path="/All" element={<NewPage/>}/>
                        <Route exact path="/Progress" element={<ProgressPage/>}/>
                        <Route exact path="/Completed" element={<CompletedPage/>}/>
                        <Route exact path="/Canceled" element={<CanceledPage/>}/>
                        <Route exact path="/Profile" element={<ProfilePage/>}/>
                        <Route exact path="/Login" element={<LoginPage/>}/>
                        <Route exact path="/Registration" element={<RegistrationPage/>}/>
                        <Route exact path="/Forgetpass" element={<ForgetpassPage/>}/>
                        {/*<Route  path="*" element={<Page404/>}/>*/}
                        <Route  path="*" element={<Navigate to="/" replace />}/>
                    </Routes>
                </BrowserRouter>
                <FullscreenLoader/>
            </Fragment>
        );
    }
    else {
        return(
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Navigate to="/Login" replace />}/>
                        <Route exact path="/Login" element={<LoginPage/>}/>
                        <Route exact path="/Registration" element={<RegistrationPage/>}/>
                        <Route exact path="/Forgetpass" element={<ForgetpassPage/>}/>
                        {/*<Route  path="*" element={<Page404/>}/>*/}
                        <Route  path="*" element={<Navigate to="/Login" replace />}/>
                    </Routes>
                </BrowserRouter>
                <FullscreenLoader/>
            </Fragment>
        );


    }



};

export default App;