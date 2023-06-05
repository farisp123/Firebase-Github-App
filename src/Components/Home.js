import React, { useContext, useState } from "react";
import axios from "axios"
import {
    Row,
    Container,
    Col,
    Input,
    Button,
    InputGroup,
} from "reactstrap"

import UserCard from "../ComponentsGithub/UserCard";
import Repos from "../ComponentsGithub/Repos";
import {Navigate} from "react-router-dom"
import { Usercontext } from "../context/UserContext";
import {toast} from "react-toastify";

const Home = () => {
    const context = useContext(Usercontext)
    const [query, setQuery] = useState('')
    const [user, setUser] = useState('') 


    //for error handling the try and catch block is used in this function
    const fetchDetails = async () => {
        try {
            const {data} = await axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
        } catch (error) {
            toast("Not able to locate the user", {type:"error"})
        }
    };

    //Put Anypage behind the login
    if (!context.user?.uid) {
        return <Navigate to="/signin" />
        
    }

    return (
            <Container>
            <Row className=" mt-3">
            <Col md="5">
            <InputGroup>
            <Input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Please provide the username"
            />
                <Button onClick={fetchDetails} color="primary">Fetch User</Button>
            </InputGroup>
            {user ? <UserCard user={user}/> : null}
            </Col>
            <Col md="7">
            {user ? <Repos repos_url={user.repos_url}/> :null}
            </Col>
            </Row>
            </Container>
      );
}

export default Home;