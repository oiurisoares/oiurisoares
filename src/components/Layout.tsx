import React, { useEffect, useState } from "react";
import { fadeVariants } from "../utils/animation";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Footer from "./Footer";
import LandingPage from "../pages/LandingPage";
import Loading from "./Loading";
import Navbar, { NavItem } from "./Navbar";

/**
 * Layout component that includes Navbar, main content area, and Footer.
 * Manages page state and handles page transitions with animations.
 * Uses i18next for translations.
 * @component
 * @returns {JSX.Element} The rendered Layout component.
 */

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;`;

const MainContent = styled.main`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;`;

const Layout: React.FC = () => {
    const { t, ready } = useTranslation('base-layout');

    const navItems: NavItem[] = [
        { key: "home", label: t('home') },
        { key: "projects", label: t('projects') },
        { key: "contact", label: t('contact') },
    ];

    const initialPage = () => {
        const savedPage = localStorage.getItem("activePage");
        if (savedPage && navItems.some(item => item.key === savedPage)) return savedPage
        return "home";
    };
    const [page, setPage] = useState<string>(initialPage());
    useEffect(() => {
        localStorage.setItem("activePage", page);
    }, [page]);

    if (!ready) return <Loading />;

    const renderPage = () => {
        switch (page) {
            case "home": return <LandingPage />;
            case "projects": return <Loading />;
            case "contact": return <Loading />;
            default: return <LandingPage />;
        }
    };
    return (
        <LayoutWrapper>
            <Navbar activePage={page} items={navItems} onSelect={setPage} />
            <MainContent>
                <AnimatePresence initial={false} mode="wait" >
                    <motion.div
                        animate="visible"
                        exit="exit"
                        initial="hidden"
                        key={page}
                        transition={{ duration: 0.1 }}
                        variants={fadeVariants}
                    >
                        {renderPage()}
                    </motion.div>
                </AnimatePresence>
            </MainContent>
            <Footer />
        </LayoutWrapper>
    );
}

export default Layout;