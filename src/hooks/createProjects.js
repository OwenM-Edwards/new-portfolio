// import projectInfo from '../portfolio projects/projects';
// import styled from "styled-components";

// const Project = styled.div`
//    width:100%;
//    height:100%;
//    color:white;
//    display:flex;
//    flex-direction:column;
//    padding:0px 30px 0px 30px;
//    justify-content:center;
//    align-items:center;
   
//    @media (max-width: 700px) {
//       padding:20px 0px 5px 0px;
//    }
   
//    & .section1 {
//       width:100%;
//       height:10%;
//       padding:20px 20px 50px 20px;
//       text-align:center;
//       h2 {
//          font-size:2.3rem;
//       }
//    }

//    & .section2 {
//       width:100%;
//       height:60%;
//       display:flex;
//       justify-content:center;
//       align-content:center;
//       align-items:center;
//       img {
//          max-width: 100%;
//          max-height: 500px;
//          object-fit:contain;
//       }
      
//    }

//    & .section3 {
//       width:60%;
//       max-width:750px;
//       height:30%;
//       display:flex;
//       flex-wrap:wrap;
//       flex-direction:column;
//       & .infoContainer {
//          width:100%;
//          height:50%;
//       }
      
//       & .buttonContainer {
//          width:100%;
//          height:50%;
//          display:flex;
//          padding-top:20px;
//          a {
//             border:0;
//             height:60px;
//             width:300px;
//             background-color:#ff4338;
//             border-radius:5px;
//             transition:all 0.5s;
//             cursor: pointer;
//             color:white;
//             display:flex;
//             justify-content:center;
//             align-items:center;
//             font-size:1.3rem;
//             text-decoration:none;
//             margin-right:20px;
//             @media (max-width: 700px), (max-height:700px) {
//                 width:100%;
//             }
            
//             &:hover {
//                background-color:#fc5a51;
//             }
//          }

//       }
//    } 
// `


// export default function createProjects() {
//    let tempHtml = [];
   
//    var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//    };
   
  
//    projectInfo.forEach(project => {
//       tempHtml =  [...tempHtml,(
//       <Project>
//             <section className="section1">
//                <h2>{project.title}</h2>
//             </section>
            

//             <section className="section2">
           
//                   <img src={project.image}/>
         
//             </section>

//             <section className="section3">
//                <div className="infoContainer">
//                   <p>
//                      {project.info}
//                   </p>
//                </div>

//                <div className="buttonContainer">
//                   <a className="button" target="blank" href={project.githubLink}>Github</a>
//                   <a className="button" target="blank" href={project.demoLink}>View site</a>
//                </div>
//             </section>
   
//       </Project>)];
//    });
  
//    return tempHtml;
// }