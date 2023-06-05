import React,{useState} from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

//react-router
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"

//toast
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
//firebase
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

//components
import Home from './Components/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import PageNotFound from './Components/PageNotFound';
import { Usercontext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';

import { firebaseConfig } from './Config/firebaseConfig';
//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {

  const [user, setUser] = useState(null);
  return (
    <Router>
    <ToastContainer />
    <Usercontext.Provider value={{user, setUser}}>
    <Header/>
    <Routes>
    <Route exact path="/" Component={Home} />
    <Route exact path="/signin" Component={Signin} />
    <Route exact path="/signup" Component={Signup} />
    <Route exact path="*" Component={PageNotFound} />
    </Routes>
    <Footer/>
    </Usercontext.Provider>
    </Router>
  
  );
}

export default App;
