import React from "react";

const NavBar = () => {
  return (
    <nav style={{ 
        backgroundColor: "#3EB489", 
        padding: "10px", 
        margin: "0", 
        position: "relative", 
        top: "0", 
        borderRadius: "0" 
      }}>
      <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
        <li>
          <div 
            className="Nav" 
            style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",            
              color: "#fff" 
            }}
          >
            
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>EV-olution</span>

            
            <div style={{ display: "flex", gap: "15px", alignItems:"center" }}>
              <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
              <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>About</a>
              <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
              <a href="/courses" style={{ color: "#fff", textDecoration: "none" }}>Courses</a>
              <div style={{ fontSize: "24px", cursor: "pointer"}}>
              &#x22EE;
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;





