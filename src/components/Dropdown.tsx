import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { fadeSlideDownVariants } from "../utils/animation";
import { IoClose, IoMenu } from "react-icons/io5";
import { styled } from "styled-components";

/**
 * Dropdown component with animation and outside click handling.
 * Props:
 * - items: Array of dropdown items with action, key, and label.
 * - trigger: Optional custom trigger element.
 */

const DropdownWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;`;

const DropdownToggle = styled(motion.button)`
    align-items: center;
    border: none;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    justify-content: center;
    padding: 10px 12px;
    transition: background 0.2s;
    width: auto;`;

const DropdownMenu = styled(motion.ul)`
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.15);
    border: 0.1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    list-style: none;
    margin-right: 28px;
    min-width: fit-content;
    padding: 0;
    position: absolute;
    right: 0;
    text-align: end;
    top: 100%;
    width: max-content;
    white-space: nowrap;
    z-index: 10;`;

const DropdownItemStyled = styled.li`
    cursor: pointer;
    padding: 8px 14px;
    transition: background 0.2s;
    
    &:hover {
        color: #ffffff;
        text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff;
    }`;

export interface DropdownItem {
    action: () => void;
    key: string;
    label: string;
};

interface DropdownProps {
    items: DropdownItem[];
    trigger?: ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({ items, trigger }) => {
    const [isOpen, setIsOpen] = useState(false);

    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current
                && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown",
            handleClickOutside);
        return () => {
            document.removeEventListener("mousedown"
                , handleClickOutside);
        };
    }, []);

    const handleSelect = (item: DropdownItem) => {
        setIsOpen(false);
        item.action();
    };

    return (
        <DropdownWrapper ref={wrapperRef}>
            <DropdownToggle
                animate={{ rotate: isOpen ? 90 : 0 }}
                onClick={() => setIsOpen((prev) => !prev)}
                transition={{ duration: 0.2 }}
                whileTap={{ scale: 0.95 }}
            >
                {trigger || (isOpen ? <IoClose size={32} /> : <IoMenu size={32} />)}
            </DropdownToggle>

            <AnimatePresence>
                {isOpen && (
                    <DropdownMenu
                        animate="visible"
                        exit="exit"
                        initial="hidden"
                        transition={{ duration: 0.1 }}
                        variants={fadeSlideDownVariants}
                    >
                        {items.map((item) => (
                            <DropdownItemStyled
                                key={item.key}
                                onClick={() => handleSelect(item)}
                            >
                                {item.label}
                            </DropdownItemStyled>
                        ))}
                    </DropdownMenu>
                )}
            </AnimatePresence>
        </DropdownWrapper>
    )
}

export default Dropdown;