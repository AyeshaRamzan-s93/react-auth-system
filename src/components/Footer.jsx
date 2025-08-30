
// src/components/Footer.jsx

function Footer() {
  const footerStyle = {
    background: "#1f2937",   
    color: "#9ca3af",        
    padding: "20px",
    textAlign: "center",
    fontSize: "0.9rem",
    marginTop: "40px",
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} ReactDemo. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
