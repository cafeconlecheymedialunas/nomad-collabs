import React from "react";
import "./index.css"
const DynamicProgressBar = ({ progress, setProgress }) => {
    return (
        <div style={{ textAlign: "center",position:"relative"}}>
            {/* Barra de progreso */}
            <div
                style={{
                    width: "100%",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "10px",
                    margin: "0 auto",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        width: `${progress}%`,
                        backgroundColor: "#76c7c0",
                        height: "30px",
                        borderRadius: "10px",
                        transition: "width 0.2s ease", // Animación suave
                    }}
                >
                    <span
                        style={{
                            display: "block",
                            textAlign: "center",
                            lineHeight: "30px",
                            color: "white",
                            fontWeight: "bold",
                        }}
                    >
                        {progress}%
                    </span>
                </div>
            </div>

            {/* Input Range para controlar el progreso */}
            <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                style={{
                    width: "100%",
                    position:"absolute",
                    top:"0",
                    left:"0",
                    opacity:"0"
                }}
            />
        </div>
    );
};

export default DynamicProgressBar;
