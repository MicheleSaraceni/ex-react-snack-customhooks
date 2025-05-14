// useCustomPointer.js
import { useState, useEffect } from "react";

export default function useCustomPointer(newCursor) {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        document.body.style.cursor = "none";
        const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMove);

        return () => window.removeEventListener("mousemove", handleMove)
    }, []);

    return <div
        style={{
            position: "fixed",
            left: position.x,
            top: position.y,
            cursor: "none",
            transform: "translate(-50%, -50%)"
        }}
    >
        {newCursor}
    </div>;
}


//document.body.style.cursor = cursor || "auto";
//return () => (document.body.style.cursor = "auto");