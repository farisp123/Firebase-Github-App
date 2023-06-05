import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
    return (
        <Container fluid tag="footer" className="text-center bg-success text-white text-uppercase fixed-bottom p-3" style={{ fontFamily: "monospace" }}>
        <span className="ms-6">  
        <a href= "https://www.linkedin.com/in/muhammed-faris-pallipath-753259242/?originalSubdomain=in" target="_blank" rel="noopener noreferrer " style={{ marginRight: "20px"}} className="text-white">
        Developed by Trendstube.in
        </a>
        </span>
         Github Search App with Firebase
    </Container>
    )
}


export default Footer;