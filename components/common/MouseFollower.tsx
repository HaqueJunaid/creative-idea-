"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function MouseFollower() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [cursorType, setCursorType] = useState<"default" | "pointer" | "text">("default");
    const [cursorText, setCursorText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const checkDevice = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => {
            window.removeEventListener("resize", checkDevice);
        };
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeaveWindow = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseleave", handleMouseLeaveWindow);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseleave", handleMouseLeaveWindow);
        };
    }, [cursorX, cursorY, isVisible, isDesktop]);

    useEffect(() => {
        if (!isDesktop) return;

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target) return;

            const elementWithText = target.closest("[data-cursor-text]");
            const isClickable = target.closest("a, button, [role='button']") !== null;

            if (elementWithText) {
                setCursorType("text");
                setCursorText(elementWithText.getAttribute("data-cursor-text") || "");
            } else if (isClickable) {
                setCursorType("pointer");
            } else {
                setCursorType("default");
            }
        };

        const handleMouseLeave = () => {
            setCursorType("default");
            setCursorText("");
        };

        document.addEventListener("mouseover", handleMouseEnter, true);
        document.addEventListener("mouseout", handleMouseLeave, true);

        return () => {
            document.removeEventListener("mouseover", handleMouseEnter, true);
            document.removeEventListener("mouseout", handleMouseLeave, true);
        };
    }, [isDesktop]);

    if (!isDesktop || !isVisible) return null;

    const size = cursorType === "text" ? 150 : cursorType === "pointer" ? 50 : 16;

    return (
        <motion.div
            className="hidden fixed top-0 left-0 rounded-full pointer-events-none z-9999 lg:flex items-center justify-center overflow-hidden"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%",
                mixBlendMode: "difference",
                backgroundColor: "white",
            }}
            animate={{ width: size, height: size }}
            transition={{ type: "spring", stiffness: 350, damping: 22, mass: 0.5 }}
        >
            {cursorType === "text" && (
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ mixBlendMode: "difference", color: "white" }}
                    className="text-center px-3 select-none text-[9px] leading-tight line-clamp-2 max-w-30 font-label font-bold tracking-widest uppercase"
                >
                    {cursorText}
                </motion.span>
            )}
        </motion.div>
    );
}
