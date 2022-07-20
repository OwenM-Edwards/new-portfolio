import websiteA_BG from  "../img/website-a.jpg";
import websiteB_BG from  "../img/website-b.jpg";
import websiteC_BG from  "../img/website-c.jpg";
import websiteD_BG from  "../img/website-d.jpg";

import {TypescriptIcon, nodeIcon, bootstrapIcon,wordpressIcon,phpIcon, reactIcon,sassIcon, postgresIcon, cssIcon, jsIcon, githubIcon,CVIcon,}  from '../img/index.js';

const personalProjectInfo = [
    {
        title:"Student Psychiatry",
        image_a:[websiteA_BG],
        image_b:[websiteA_BG],
        
        info_a:"Student psychiatry was initially designed to help students securely organise online events during Covid lockdown.",

        info_b:"Event organisers must register using an approved email domain to add their own events. Each event has public links, for anyone to view, and private links which can only be viewed by registered users. This helps organiser protect their open event links.",


        info_c:"The Node.JS server handles user sessions with express session and the database with the Sequelize ORM, these were the first time I used these technologies and while challenging they gave me a much better understanding of back-end developement.",

        githubLink:"https://github.com/OwenM-Edwards/student-psych-frontend",
        demoLink:"http://www.studentpsychiatry.com/",
        skillIcons:[
            <img src={jsIcon} data-tip="JavaScript" alt="Javascript"/>, 
            <img src={reactIcon} data-tip="React.js" alt="React"/>, 
            <img src={nodeIcon} data-tip="Node.js" alt="Node"/>, 
            <img src={cssIcon} data-tip="CSS" alt="CSS"/>,
            <img src={sassIcon} data-tip="SASS" alt="SASS"/>,
            <img src={postgresIcon} data-tip="PostgreSQL" alt="Postgres"/>,
        ]
    },

    {
        title:"Community NPC Generator",
        image_a:[websiteB_BG],
        image_b:[websiteB_BG],
        info_a:"The Community NPC Gen is a random character creator for us in tabletop games, designed to be easy and quick to use. The App also allows users to submit their own character data to the generator for others to discover.",

        info_b:"This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and other technologies I had learnt, and also as an opportunity to practice with React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.",

        githubLink:"https://github.com/OwenM-Edwards/The-Community-NPC-Generator-Front-End",
        demoLink:"https://www.communitychargen.co.uk/",
        skillIcons:[
            <img src={jsIcon} data-tip="JavaScript" alt="Javascript"/>, 
            <img src={reactIcon} data-tip="React.js" alt="React"/>, 
            <img src={nodeIcon} data-tip="Node.js" alt="Node"/>, 
            <img src={cssIcon} data-tip="CSS" alt="CSS"/>,
            <img src={sassIcon} data-tip="SASS" alt="SASS"/>,
            <img src={postgresIcon} data-tip="PostgreSQL" alt="Postgres"/>,
        ]
    },

    {
        title:"Oakfield Photography",
        image_a:[websiteC_BG],
        image_b:[websiteC_BG],
        info_a:"A local company that were in serious need of a website redesign, and I was happy to oblige. This was the first live project I made that made use of SCSS. The site features a mobile-first responsive design, a service map powered by Google Maps, and automatically pulls and sorts gallery images using the Cloudinary API.",

        githubLink:"https://github.com/OwenM-Edwards/Oakfield-Photography",
        demoLink:"https://www.studentpsychiatry.co.uk/calendar/5/2021",
        skillIcons:[
            <img src={jsIcon} data-tip="JavaScript" alt="Javascript"/>, 
            <img src={cssIcon} data-tip="CSS" alt="CSS"/>,
            <img src={sassIcon} data-tip="SASS" alt="SASS"/>,
        ]
    },

    {
        title:"Myth-des",
        image_a:[websiteD_BG],
        image_b:[websiteD_BG],
        info_a:"Myth-Des is a fictional design company I created to help hone my CSS and SCSS skills. I also used it to experiment with CSS animations, creating sleek landing page and header animations. It showcases art projects from around Nottingham and some of the fictional brands that they work with.",

        githubLink:"https://github.com/OwenM-Edwards/fic_design_comp",
        demoLink:"https://owenm-edwards.github.io/fic_design_comp/",
        skillIcons:[
            <img src={jsIcon} data-tip="JavaScript" alt="Javascript"/>, 
            <img src={cssIcon} data-tip="CSS" alt="CSS"/>,
        ]
    },
];


 export default personalProjectInfo;



 