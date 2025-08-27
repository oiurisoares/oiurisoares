import { styled } from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { changeLanguage } from "i18next";
import { fadeVariants } from "../utils/animation";
import { getFlagByLanguage } from "../config/i18n";
import { useIsMobileScreen } from "../hooks/IsMobileScreen";
import { useTranslation } from "react-i18next";
import Dropdown from "./Dropdown";
import FlagBRA from "../assets/img/flag-br.png";
import FlagUSA from "../assets/img/flag-usa.png";
import Loading from "./Loading";

/**
 * Navigation bar component with language switcher and dropdown menu.
 * @component
 * @param {string} activePage - The currently active page key.
 * @param {NavItem[]} items - List of navigation items.
 * @param {function} onSelect - Callback function when a navigation item is selected.
 * @returns {JSX.Element} The rendered Navbar component.
 */

const NavbarWrapper = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  left: 0;
  min-height: 10%;
  padding: 15px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  left: 50%;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    margin-right: auto;
    padding: 0 12px;
    position: static;
    transform: none;
  }
`;

const DropdownLabel = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isActive",
}) <{ isActive?: boolean }>`
  color: #fff;
  cursor: pointer;
  display: flex;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;

interface NavItemProps {
    isActivePage?: boolean;
}
const NavItemStyled = styled.li.withConfig({
    shouldForwardProp: (prop) => prop !== "isActivePage",
}) <NavItemProps>`
  align-items: center;
  color: ${({ isActivePage: activePage }) => (activePage ? "#ffffff" : "#888888")};
  cursor: pointer;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-weight: ${({ isActivePage: activePage }) => (activePage ? "bold" : "normal")};
  justify-content: center;
  scale: ${({ isActivePage: activePage }) => (activePage ? "1.2" : "1")};
  transition: color 0.3s, font-weight 0.3s, border-bottom 0.3s;

  &:hover {
    color: #ffffff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff;
  }
`;

const NavExtra = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;
  max-height: max-content;
  min-height: fit-content;
`;

export interface NavItem {
    key: string;
    label: React.ReactNode;
}

interface NavbarProps {
    activePage: string;
    items: NavItem[];
    onSelect: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, items, onSelect }) => {
    const { t, ready } = useTranslation("base-layout");
    const isMobile = useIsMobileScreen();

    const [flag, setFlag] = useState(getFlagByLanguage());
    const dropdownOptions = [{ action: () => { }, key: "", label: t("upcoming") }];

    if (!ready) return <Loading />;

    return (
        <NavbarWrapper>
            <NavList>
                {!isMobile &&
                    items.map((item: NavItem) => (
                        <NavItemStyled
                            isActivePage={activePage === item.key}
                            key={item.key}
                            onClick={() => onSelect(item.key)}
                        >
                            {item.label}
                        </NavItemStyled>
                    ))}

                {isMobile && (
                    <Dropdown
                        disableMotion
                        items={items.map((item: NavItem) => ({
                            action: () => onSelect(item.key),
                            key: item.key,
                            label: <DropdownLabel isActive={false}>{item.label}</DropdownLabel>,
                        }))}
                        position="left"
                        trigger={<NavItemStyled isActivePage={false}>{t(activePage)}</NavItemStyled>}
                    />
                )}
            </NavList>

            <NavExtra>
                <AnimatePresence mode="wait">
                    <motion.img
                        alt="flag"
                        animate="visible"
                        exit="exit"
                        height={30}
                        initial="hidden"
                        key={flag}
                        src={flag}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            setFlag(flag === FlagUSA ? FlagBRA : FlagUSA);
                            changeLanguage(flag === FlagBRA ? "pt" : "en");
                        }}
                        transition={{ duration: 0.1 }}
                        variants={fadeVariants}
                    />
                </AnimatePresence>

                <Dropdown items={dropdownOptions} />
            </NavExtra>
        </NavbarWrapper>
    );
};

export default Navbar;
