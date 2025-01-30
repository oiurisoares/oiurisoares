import { Suspense } from "react";
import { Routes } from "react-router-dom";
import WaveLoading from "../components/WaveLoading";

const Loading = () => <WaveLoading />
const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;