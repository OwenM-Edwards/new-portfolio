import React, {useState} from 'react';
import { AnimatePresence } from "framer-motion"
import {
  Route,
  Switch,
  useLocation,
  Redirect,
} from "react-router-dom";
import styled, {ThemeProvider, keyframes} from "styled-components";
import { Main, Projects, Contact } from './pages/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useWindowDimensions, createProjects} from './hooks/index';
import ReactTooltip from 'react-tooltip';
import { theme } from './styled/styles';
import noiseBG from './img/noise.png';

const grain = keyframes`
  0%, 100% { transform:translate(0, 0) }
  10% { transform:translate(-5%, -10%) }
  20% { transform:translate(-15%, 5%) }
  30% { transform:translate(7%, -25%) }
  40% { transform:translate(-5%, 25%) }
  50% { transform:translate(-15%, 10%) }
  60% { transform:translate(15%, 0%) }
  70% { transform:translate(0%, 15%) }
  80% { transform:translate(3%, 35%) }
  90% { transform:translate(-10%, 10%) }
`
const BgNoiseSrc = styled.div`
  content: "";
  background-image:url(${noiseBG});
  height: 200%;
  width: 200%;
  position: fixed;
  top: -100%;
  left: -50%;
  animation: 10s ${grain} steps(20) infinite;
  z-index:1;
`
const Wrapper = styled.div`
  max-width:100vw;
  height:${props => props.height};
  margin:0 auto;
  overflow:hidden;
  position: relative;
  display:flex;
  flex-wrap:nowrap;
  justify-content:center;
  background-color:${props => props.theme.primaryColor};

  &:after {
    content: "";
    background-image:url(${noiseBG});
    height: 300%;
    width: 300%;
    position: fixed;
    top: -100%;
    left: -50%;
    animation: 20s ${grain} steps(10) infinite;
    z-index:1;
  }

`


const App = () => {
  const location = useLocation();
  const [enterDirection, setEnterDirection] = useState(false);
  const { height } = useWindowDimensions();
  const heightpx = `${height}px`;
  const globalSlideAnimationDuration = 0.9;
  const projectHtml = createProjects();
  
  
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
                  <Projects projectHtml={projectHtml} globalSlideAnimationDuration={globalSlideAnimationDuration} enterDirection={enterDirection}/>
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
