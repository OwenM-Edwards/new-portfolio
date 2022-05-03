import React, {useState, Suspense, lazy} from 'react';
import { AnimatePresence } from "framer-motion"
import {
  Route,
  Switch,
  useLocation,
  Redirect,
} from "react-router-dom";
import styled, {ThemeProvider} from "styled-components";
import { Main, Projects, Contact } from './pages/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useWindowDimensions} from './hooks/index';
import ReactTooltip from 'react-tooltip';
import { theme } from './styled/styles';


const Wrapper = styled.div`
  max-width:100vw;
  height:${props => props.height};
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
  const { height } = useWindowDimensions();
  const heightpx = `${height}px`;

  const globalSlideAnimationDuration = 0.9;
  
  
  return (
    <ThemeProvider theme={theme} >
      <ReactTooltip />
      <Wrapper height={heightpx}>
          <div className="backgroundImage"></div>
          <ToastContainer />
          <AnimatePresence  initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route path="/main">
                  <Main globalSlideAnimationDuration={globalSlideAnimationDuration}  setEnterDirection={setEnterDirection}/>
              </Route>

              <Route path="/projects">
                  <Projects globalSlideAnimationDuration={globalSlideAnimationDuration} enterDirection={enterDirection}/>
              </Route>

              <Route path="/contact">
                  <Contact globalSlideAnimationDuration={globalSlideAnimationDuration}  setEnterDirection={setEnterDirection}/>
              </Route>

              <Route exact path="/">
                {<Redirect to="/main" />}
              </Route>
            </Switch>
          </AnimatePresence>
        
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
