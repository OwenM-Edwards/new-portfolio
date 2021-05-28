import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion"
import {
  BrowserRouter as Router, 
  Route,
  Redirect,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Main, Projects, Contact } from './pages/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from "./img/bg.jpg"

const Wrapper = styled.div`
  max-width:100vw;
  height:100vh;
  margin:0 auto;
  overflow:hidden;
  position: relative;
  display:flex;
  flex-wrap:nowrap;
  justify-content:center;

`

const App = () => {
  const location = useLocation();
  const [enterDirection, setEnterDirection] = useState(false);


  return (
    <Wrapper>
        <div className="backgroundImage"></div>
        <ToastContainer />
        <AnimatePresence  initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route path="/main">
                <Main setEnterDirection={setEnterDirection}/>
            </Route>

            <Route path="/projects">
                <Projects enterDirection={enterDirection}/>
            </Route>

            <Route path="/contact">
                <Contact setEnterDirection={setEnterDirection}/>
            </Route>

            <Route exact path="/">
              <Main setEnterDirection={setEnterDirection}/>
            </Route>
          </Switch>
        </AnimatePresence>
      
    </Wrapper>
  );
}

export default App;
