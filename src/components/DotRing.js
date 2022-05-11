import useMousePosition from "../hooks/useMousePosition";
import styled from "styled-components";

const Wrapper = styled.div`
   .ring {
      position: fixed;
      top: 0;
      left: 0;
      width: 25px;
      height: 25px;
      border: 4px solid ${props => props.theme.popColor};
      border-radius: 100%;
      transform: translate(-50%, -50%);
      -webkit-transition-duration: 50ms;
      transition-duration: 10ms;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
      /* will-change: width, height, transform, border; */
      z-index: 99999999999999;
      pointer-events: none;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); 
   }
   
   .dot {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      background-color: black;
      border-radius: 100%;
      transform: translate(-50%, -50%);
      z-index: 999;
      pointer-events: none;
      display:none;
   }

`




const DotRing = () => {
    // 1.
  const { x, y } = useMousePosition();
  return (
    <Wrapper>
            {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="ring"
      ></div>
            {/* 3. */}
      <div
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </Wrapper>
  );
};

export default DotRing;