import React, { useEffect, useState } from "react";
import "../styles/backgroundeffect.css";

const StarryBackground = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);

        const starContainer = document.getElementById("star-container");
        if (starContainer) {
            starContainer.innerHTML = "";
            for (let i = 0; i < 150; i++) {
                const star = document.createElement("div");
                star.className = "star";
                star.style.top = Math.random() * 200 + "vh";
                star.style.left = Math.random() * 100 + "vw";
                star.style.animationDuration = (Math.random() * 3 + 1) + "s";
                star.style.animationDelay = Math.random() * 2 + "s";
                starContainer.appendChild(star);
            }
        }
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="background-wrapper">
            <div id="star-container"></div>
            
            {/* Aurora / Mesh Gradients */}
            <div className="aurora aurora-1"></div>
            <div className="aurora aurora-2"></div>
            <div className="aurora aurora-3"></div>
            
            {/* Interactive Cursor Glow */}
            <div 
                className="cursor-glow"
                style={{
                    transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                }}
            ></div>

            <div className="overlay"></div>
        </div>
    );
};

export default StarryBackground;
