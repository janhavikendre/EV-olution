import React from "react";

const HomePage = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", padding: "20px" }}>
            <img 
                src="https://img.freepik.com/premium-photo/elearning-with-interactive-icons_1267997-2431.jpg?w=740" 
                alt="E-Learning" 
                style={{ maxWidth: "50%", height: "auto", marginRight: "20px" }} 
            />
            <div style={{ textAlign: "left" }}>
                <h1 style={{ fontSize: "24px", color: "#0984e3" }}>Welcome to EV-olution</h1>
                <p style={{ fontSize: "16px", color: "#333" }}>
                    Your journey to knowledge begins here. Explore our courses and enhance your skills!
                </p>
            </div>
        </div>
    );
}

export default HomePage;

