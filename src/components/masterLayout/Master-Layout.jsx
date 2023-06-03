import React, {Fragment, useRef} from "react";
import {Container,Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";


import logo from "../../assets/images/logo.svg";

import {AiOutlineCheckCircle, AiOutlineEdit,AiOutlineUser,AiOutlineLogout, AiOutlineMenuUnfold} from "react-icons/ai";
import {BsHourglass, BsListNested} from "react-icons/bs";
import {MdOutlineCancelPresentation } from "react-icons/md";
import {RiDashboardLine} from "react-icons/ri";
import {BiCopyright} from "react-icons/bi";
import {CiFacebook, CiLinkedin, CiPhone, CiTwitter} from "react-icons/ci";





const MasterLayout = (props) => {

    let contentRef,sideNavRef=useRef();

    const onLogout=()=>{
        // removeSessions();
    }

    const MenuBarClickHandler = () => {
        let sideNav = sideNavRef;
        let content = contentRef;
        if (sideNav.classList.contains("side-nav-open")) {
            sideNav.classList.add("side-nav-close");
            sideNav.classList.remove("side-nav-open");
            content.classList.add("content-expand");
            content.classList.remove("content");
        } else {
            sideNav.classList.remove("side-nav-close");
            sideNav.classList.add("side-nav-open");
            content.classList.remove("content-expand");
            content.classList.add("content");
        }
    };



    return (
        <Fragment>
            <Navbar  className="fixed-top px-0 shadow-sm ">
                <Container fluid={true}>
                    <Navbar.Brand >
                        <a className="icon-nav m-0 h5" onClick={MenuBarClickHandler}>
                            {/*<FiAlignJustify/>*/}
                            <AiOutlineMenuUnfold/>
                        </a>
                        <img className="nav-logo mx-2"  src={logo} alt="logo"/>
                    </Navbar.Brand>

                    <div className="float-right h-auto d-flex">
                        <div className="user-dropdown">
                            <img className="icon-nav-img icon-nav" src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/302533629_584947676437581_3124422828536597992_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFA-MViQsfG-bv5mZNwFdZe90VkA1Vxzsn3RWQDVXHOyeu1-hjSMMyGhRVotGzpRSM&_nc_ohc=fB5mTCLh1soAX-0JeVj&_nc_ht=scontent.fdac135-1.fna&oh=00_AfBphmYQviabSRqCwD2cz5QK-dDsOzjmzdEWipP23ybSGw&oe=646DB47E "alt=""/>
                            <div className="user-dropdown-content ">
                                <div className="mt-4 text-center">
                                    <img className="icon-nav-img" src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/302533629_584947676437581_3124422828536597992_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFA-MViQsfG-bv5mZNwFdZe90VkA1Vxzsn3RWQDVXHOyeu1-hjSMMyGhRVotGzpRSM&_nc_ohc=fB5mTCLh1soAX-0JeVj&_nc_ht=scontent.fdac135-1.fna&oh=00_AfBphmYQviabSRqCwD2cz5QK-dDsOzjmzdEWipP23ybSGw&oe=646DB47E "alt=""/>
                                    {/*<h6>{getUserDetails()['firstName']}</h6>*/}
                                    <h6>ASRAFUL ALAM</h6>
                                    <hr className="user-dropdown-divider  p-0"/>
                                </div>
                                <NavLink to="/Profile" className="side-bar-item">
                                    <AiOutlineUser className="side-bar-item-icon" />
                                    <span className="side-bar-item-caption">Profile</span>
                                </NavLink>
                                <a onClick={onLogout}  className="side-bar-item">
                                    <AiOutlineLogout className="side-bar-item-icon" />
                                    <span className="side-bar-item-caption">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>

            <div ref={(div) =>{sideNavRef=div}} className="side-nav-open">

                <NavLink   className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/"  end>
                    <RiDashboardLine className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Dashboard</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/Create" >
                    <AiOutlineEdit className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Create New</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/All" >
                    <BsListNested className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">New Task</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/Progress" >
                    <BsHourglass className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">In Progress</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/Completed" >
                    <AiOutlineCheckCircle className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Completed</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/Canceled" >
                    <MdOutlineCancelPresentation className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Canceled</span>
                </NavLink>

            </div>

            <div ref={(div) => contentRef = div} className="content">
                {props.children}
            </div>



        </Fragment>
    );
};

export default MasterLayout;