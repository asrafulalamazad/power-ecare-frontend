import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/LazyLoader";

const Forgetpass = lazy(()=>import("../components/Forgetpass/Forgetpass"))

const ForgetpassPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Forgetpass/>

                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ForgetpassPage;