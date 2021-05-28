import React, {useState} from 'react';
import { AnimatePresence } from "framer-motion"
import {
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import { Main, Projects, Contact } from './pages/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
