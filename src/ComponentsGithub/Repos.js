import React,{useState, useEffect} from "react";
import axios from "axios";
import {ListGroupItem, ListGroup} from "reactstrap"

const Repos = ({ repos_url }) => {
    const [repos, setRepos] = useState([]);
  
    const fetchRepos = async () => {
      try {
        const response = await axios.get(repos_url);
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };
  
    useEffect(() => {
       fetchRepos();
    }, [repos_url]);
  
    return (
      <ListGroup>
        {repos.map(repo => (
          <ListGroupItem key={repo.id}>
            <div className="text-primary">{repo.name}</div>
            <div className="text-secondary">{repo.language}</div>
            <div className="text-info">{repo.description}</div>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  };
  


export default Repos;
