import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../components/Loading";
import React from "react";

const LoadingSpinner = () => <Loading />;
const LandingPage = React.lazy(() => import("../pages/LandingPage"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path="/" element={< LandingPage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;