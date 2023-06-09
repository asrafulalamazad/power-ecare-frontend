import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";
import {AiOutlineCalendar, AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";

const Canceled = () => {
    return (
        <Fragment>
            <Container fluid={true} className="content-body">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-6 col-lg-8 px-3">
                        <h5>Canceled</h5>
                    </div>
                    <div className="col-12 float-end col-md-6 col-lg-4 px-2">
                        <div className="row">
                            <div className="col-8">
                                <input className="form-control w-100"/>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary w-100">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-0 m-0">

                    <div className="col-12 col-lg-4 col-sm-6 col-md-4  p-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h6 className="animated fadeInUp">Azad</h6>
                                <p className="animated fadeInUp">Azad</p>
                                <p className="m-0 animated fadeInUp p-0">
                                    <AiOutlineCalendar/>20/04/2022
                                    <a  className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                    <a  className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                    <a className="badge float-end bg-danger">Canceled</a>
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </Container>
        </Fragment>
    );
};

export default Canceled;