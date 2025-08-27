import { ReactNode, useState } from "react";
import { fadeSlideUpVariants } from "../utils/animation";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

/**
 * A simple tooltip component that shows a tooltip on hover.
 * --
 * @param content The content of the tooltip.
 * @param children The element that will trigger the tooltip on hover.
 * @returns A tooltip component.
 */

const TooltipWrapper = styled.div`
    cursor: pointer;
    display: inline-block;
    position: relative;`;

const TooltipBox = styled(motion.div)`
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.15);
    border: 0.1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    bottom: 100%;
    color: #888888;
    font-size: 13px;
    left: 50%;
    max-width: 500px;
    min-width: fit-content;
    padding: 6px 10px;
    pointer-events: none;
    position: absolute;
    transform: translateX(-50%);
    white-space: normal;
    word-wrap: break-word;
    z-index: 999;`;

type TooltipProps = {
    children: ReactNode;
    content: string;
};

export default function Tooltip({ content, children }: TooltipProps) {
    const [show, setShow] = useState(false);

    return (
        <TooltipWrapper
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {children}

            <AnimatePresence>
                {show && (
                    <TooltipBox
                        animate="visible"
                        exit="exit"
                        initial="hidden"
                        transition={{ duration: 0.1 }}
                        variants={fadeSlideUpVariants}
                    >
                        {content}
                    </TooltipBox>
                )}
            </AnimatePresence>
        </TooltipWrapper>
    );
}
