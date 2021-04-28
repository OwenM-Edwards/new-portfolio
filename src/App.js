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
import { Navbar } from './components/index';

const Wrapper = styled.div`
  min-width:100%;
  max-width:100%;
  height:100vh;
  background-color: black;
  position: relative;
  display:flex;
  flex-wrap:nowrap;
`

const App = () => {
  const location = useLocation();
  const [enterDirection, setEnterDirection] = useState(false);


  return (
    <Wrapper>
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
          </Switch>
        </AnimatePresence>
      
    </Wrapper>
  );
}

export default App;
