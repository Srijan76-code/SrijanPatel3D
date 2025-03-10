import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./CustomCursor.css";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;

            gsap.to(cursorRef.current, {
                x: x - cursorRef.current.offsetWidth / 2,
                y: y - cursorRef.current.offsetHeight / 2,
                duration: 0.08,
                ease: "power2.out",
            });
        };

        document.addEventListener("mousemove", moveCursor);
        return () => document.removeEventListener("mousemove", moveCursor);
    }, []);

    return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;