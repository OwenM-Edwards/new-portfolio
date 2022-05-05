import projectInfo from '../portfolio projects/projects';
import LazyLoad from 'react-lazyload';
import Slider from "react-slick";

export default function createProjects() {
    let tempHtml = [];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  
    projectInfo.forEach(project => {
        tempHtml =  [...tempHtml,(
        <div className="project">
           
              <h2>{project.title}</h2>

              <div className="imageWrapper">
                 <div className="imageContainer">
                    
                 </div>
              </div>

              <section>
                 <div className="infoContainer">
                    <p>
                       {project.info}
                    </p>

                    <ul>
                       <li>React.js</li>
                       <li>Redux</li>
                       <li>Node.js</li>
                       <li>Express</li>
                       <li>PostgreSQL</li>
                    </ul>
                 </div>

                 <div className="buttonContainer">
                    <a className="button" target="blank" href={project.githubLink}>Github</a>
                    <a className="button" target="blank" href={project.demoLink}>View site</a>
                 </div>
              </section>
      
        </div>)];
    });
  
    return tempHtml;
}