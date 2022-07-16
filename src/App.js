import React, {useState} from 'react';
import { AnimatePresence } from "framer-motion"
import {
  Route,
  Switch,
  useLocation,
  Redirect,
} from "react-router-dom";
import styled, {ThemeProvider, keyframes} from "styled-components";
import { Main, Projects, Contact, MainOld2 } from './pages/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useWindowDimensions} from './hooks/index';
import ReactTooltip from 'react-tooltip';
import { theme } from './styled/styles';
import noiseBG2 from './img/noise2.png';

const grain = keyframes`
  0%, 100% { transform:translate(0, 0) }
  10% { transform:translate(-10%, -10%) }
  20% { transform:translate(10%, 10%) }
  30% { transform:translate(-10%, -10%) }
  40% { transform:translate(10%, 10%) }
  50% { transform:translate(-10%, -10%) }
  60% { transform:translate(10%, 10%) }
  70% { transform:translate(-10%, -10%) }
  80% { transform:translate(10%, 10%) }
  90% { transform:translate(-10%, -10%) }
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
    background-image:url(${noiseBG2});
    height: 400%;
    width: 400%;
    position: fixed;
    top: -100%;
    left: -50%;
    animation: 20s ${grain} steps(15) infinite;
    z-index:1;
  }

`




const App = () => {
  const location = useLocation();
  const [enterDirection, setEnterDirection] = useState(false);
  const { height, width } = useWindowDimensions();
  const heightpx = `${height}px`;
  const globalSlideAnimationDuration = 0.9;
  const [mainInitial, setMainInitial] = useState(false);
  const [mobileAnimation, setMobileAnimation] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const showSettings = (event) => {
    event.preventDefault();
  }
  
  return (
    <ThemeProvider theme={theme} >

      {/* <DotRing/> */}
      <ReactTooltip />
      
      <Wrapper height={heightpx}>
          <div className="backgroundImage"></div>
          <ToastContainer />
          <AnimatePresence  initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route path="/home">
                  <Main openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} mobileAnimation={mobileAnimation} setMobileAnimation={setMobileAnimation} width={width} height={height} mainInitial={mainInitial}  globalSlideAnimationDuration={globalSlideAnimationDuration}  setEnterDirection={setEnterDirection}/>
              </Route>

              <Route path="/projects">
                  <Projects openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} mobileAnimation={mobileAnimation} setMobileAnimation={setMobileAnimation} width={width} globalSlideAnimationDuration={globalSlideAnimationDuration} enterDirection={enterDirection} setMainInitial={setMainInitial}/>
              </Route>

              <Route path="/contact">
                  <Contact openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} mobileAnimation={mobileAnimation} setMobileAnimation={setMobileAnimation} width={width} globalSlideAnimationDuration={globalSlideAnimationDuration}  setEnterDirection={setEnterDirection} setMainInitial={setMainInitial}/>
              </Route>

              <Route exact path="/">
                {<Redirect to="/home" />}
              </Route>
            </Switch>
          </AnimatePresence>

      </Wrapper>


    </ThemeProvider>
  );
}

export default App;
