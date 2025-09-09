import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../components/Loading";
import React from "react";

const LoadingSpinner = () => <Loading />;
const Layout = React.lazy(() => import("../components/Layout"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;