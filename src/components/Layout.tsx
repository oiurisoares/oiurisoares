import type React from "react";
import { useTranslation } from "react-i18next";
import Loading from "./Loading";

const Layout: React.FC = () => {
    const { ready } = useTranslation('layout');
    if (!ready) return <Loading />;

    const renderPage = () => {
        switch ('page') {
            default: return <Loading />;
        }
    };
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <nav></nav>
            </header>
            <main className="flex flex-1 flex-col items-center justify-center">
                {renderPage()}
            </main>
            <footer></footer>
        </div>
    );
};

export default Layout;