import websiteB_BG from  "../img/website-b.jpg";
import sevadisImage from "../img/sevadis.png";
import santeImage from "../img/sante.png";
import {TypescriptIcon, nodeIcon, bootstrapIcon,wordpressIcon,phpIcon, reactIcon,sassIcon, postgresIcon, cssIcon, jsIcon, githubIcon,CVIcon,}  from '../img/index.js';

const professionalProjectInfo = [
    {
        title:"Santé",
        image:[santeImage],
        info_a:"A full site built from scratch, working from provided designs. Sante-Group working in partnership with Lowenstein medical needed a new site for their sleep therapy range.",
        info:"",
        demoLink:"https://www.studentpsychiatry.co.uk/calendar/5/2021",
        skillIcons:[
            <img src={jsIcon} alt="Javascript"/>, 
            <img src={reactIcon} alt="React"/>, 
            <img src={nodeIcon} alt="Node"/>, 
            <img src={cssIcon} alt="CSS"/>,
            <img src={sassIcon} alt="SASS"/>,
            <img src={postgresIcon} alt="Postgres"/>,
        ]
    },

    {
        title:"Enapps",
        image:[websiteB_BG],
        info_a:"An innovative software company located in Londan, I have provided general website maintenance for the Enapps team, as well as helping to bring to life new pages and designs.",
        demoLink:"https://www.studentpsychiatry.co.uk/calendar/5/2021",
        skillIcons:[
            <img src={jsIcon} alt="Javascript"/>, 
            <img src={reactIcon} alt="React"/>, 
            <img src={nodeIcon} alt="Node"/>, 
            <img src={cssIcon} alt="CSS"/>,
            <img src={sassIcon} alt="SASS"/>,
            <img src={postgresIcon} alt="Postgres"/>,
        ]
    },

    {
        title:"Sevadis",
        image:[sevadisImage],
        info_a:"A national retailer for e-car charge points and products, I have worked activly maintained the Sevadis website as well as creating new product and information pages for them such as the Maxicharger page.",
        demoLink:"https://www.studentpsychiatry.co.uk/calendar/5/2021",
        skillIcons:[
            <img src={jsIcon} alt="Javascript"/>, 
            <img src={reactIcon} alt="React"/>, 
            <img src={nodeIcon} alt="Node"/>, 
            <img src={cssIcon} alt="CSS"/>,
            <img src={sassIcon} alt="SASS"/>,
            <img src={postgresIcon} alt="Postgres"/>,
        ]
    },
];


 export default professionalProjectInfo;