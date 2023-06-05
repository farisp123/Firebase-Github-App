import React,{useState, useContext} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav, NavItem, NavLink, NavbarText
} from "reactstrap"
import {Link} from "react-router-dom"
import { Usercontext } from "../context/UserContext";

const Header = () => {
    const context = useContext(Usercontext)
    //this state is used for toggler 
    const [isOpen, setIsOpen] = useState(false)
    //flipping the method turn to false and false to true
    const toggle = () => setIsOpen(!isOpen)

    return(
        <Navbar color="success" light expand="md">
        <NavbarBrand><Link style={{textDecoration:"none"}} to="/" className="text-white"> Firebase GithubApp</Link>
        </NavbarBrand>
        <NavbarText className="text-white">
        {context.user?.email && <span style={{fontWeight:'bold'}}>Hello, </span>}
        {context.user?.email}
      </NavbarText>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
        {
            context.user? (
                <NavItem>
                <NavLink onClick={() => {context.setUser(null)}} className="text-white"  style={{cursor:"pointer", fontWeight:"bold"}}>Logout</NavLink>
                </NavItem>
            ) : (
                <>
                <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white" style={{fontWeight:"bold"}}>SignUp</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white" style={{fontWeight:"bold"}}>SignIn</NavLink>
                </NavItem>
                </>
            )
        }
        </Nav>
        </Collapse>
        </Navbar>
    )
}


export default Header;