import sevadisImage from "../img/sevadis.png";
import santeImage from "../img/sante.png";
import Enapps1 from "../img/enapps1.png";
import Enapps2 from "../img/enapps2.png";
import {TypescriptIcon, nodeIcon, bootstrapIcon,wordpressIcon,phpIcon, reactIcon,sassIcon, postgresIcon, cssIcon, jsIcon, githubIcon,CVIcon,}  from '../img/index.js';

const professionalProjectInfo = [
    {
        title:"Santé",
        image_a:[santeImage],
        image_b:[santeImage],
        info_a:"Santé is a Procurement and Supply Chain Consulting Firm, delivering agile sourcing and supply chain solutions across multiple sectors worldwide. I have helped to mainting their current site and new content as needed,",
        info_b:"I have also helped them build an entirly new site from scratch, working from provided designs, for a new Sante-Group-Lowenstein Medical partnership, who needed a new site for their sleep therapy range.",
        demoLink:"https://sante-group.com/",
        skillIcons:[
            <img src={jsIcon} alt="Javascript"/>, 
            <img src={cssIcon} alt="CSS"/>,
            <img src={sassIcon} alt="SASS"/>,
            <img src={wordpressIcon} alt="Wordpress"/>,
        ]
    },

    {
        title:"Enapps",
        image_a:[Enapps1],
        image_b:[Enapps2],
        info_a:"An innovative software company located in Londan, I have provided general website maintenance for the Enapps team, as well as helping to bring to life new pages and designs.",
        demoLink:"https://enapps.com/",
        skillIcons:[
            <img src={jsIcon} alt="Javascript"/>, 
            <img src={cssIcon} alt="CSS"/>,
            <img src={sassIcon} alt="SASS"/>,
            <img src={wordpressIcon} alt="Wordpress"/>,
        ]
    },

    {
        title:"Sevadis",
        image_a:[sevadisImage],
        image_b:[sevadisImage],
        info_a:"Sevadis is a UK company with an established reputation in electric vehicle technology, and are A Leading Supplier of Electric Vehicle Charging Products.",
        info_b:"I have built several new pages for Sevadis working from full designs, and have played an active role in mainainting and updating their website, for example creating new product and information pages for them such as the Maxicharger page.",
        demoLink:"https://sevadis.com/",
        skillIcons:[
            <img src={jsIcon} alt="Javascript"/>, 
            <img src={cssIcon} alt="CSS"/>,
            <img src={sassIcon} alt="SASS"/>,
            <img src={wordpressIcon} alt="Wordpress"/>,
        ]
    },
];


 export default professionalProjectInfo;