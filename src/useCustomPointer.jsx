// useCustomPointer.js
import { useState, useEffect } from "react";

export default function useCustomPointer() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        document.body.style.cursor = "none";
        const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMove);

        return () => {
            window.removeEventListener("mousemove", handleMove)
            document.body.style.cursor = "auto";
        };
    }, []);

    return position;
}


//document.body.style.cursor = cursor || "auto";
//return () => (document.body.style.cursor = "auto");