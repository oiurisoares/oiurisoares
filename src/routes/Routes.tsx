import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../components/Loading";

const LoadingSpinner = () => <Loading />;

const AppRoutes = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path="/" element={<Loading />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;