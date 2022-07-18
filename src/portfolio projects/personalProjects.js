import websiteA_BG from  "../img/website-a.jpg";
import websiteB_BG from  "../img/website-b.jpg";
import websiteC_BG from  "../img/website-c.jpg";
import websiteD_BG from  "../img/website-d.jpg";
import {TypescriptIcon, nodeIcon, bootstrapIcon,wordpressIcon,phpIcon, reactIcon,sassIcon, postgresIcon, cssIcon, jsIcon, githubIcon,CVIcon,}  from '../img/index.js';

const personalProjectInfo = [
    {
        title:"Student Psychiatry",
        image:[websiteA_BG],
        info_a:"Student psychiatry was initially designed to help students securely organise online events during Covid lockdown. Event organisers must register using an approved email domain to add their own events. Each event has public links, for anyone to view, and private links which can only be viewed by registered users. This helps organiser protect their open event links. The Node.JS server handles user sessions with express session, this was the first time I used this technology and it taught me a lot. Mention sequelize too.",
        githubLink:"https://github.com/OwenM-Edwards/student-psych-frontend",
        demoLink:"https://www.studentpsychiatry.co.uk/calendar/5/2021",
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
        image:[websiteB_BG],
        info_a:"The Community NPC Gen is a random character creator for us in tabletop games. An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use. This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.",
        info_b:"The Community NPC Gen is a random character creator for us in tabletop games. An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use. This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.",
        info_c:"The Community NPC Gen is a random character creator for us in tabletop games. An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use. This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.",
        githubLink:"https://github.com/OwenM-Edwards/student-psych-frontend",
        demoLink:"https://www.studentpsychiatry.co.uk/calendar/5/2021",
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
        image:[websiteC_BG],
        info_a:"They were in serious need of a website redesign, and I was happy to oblige. This was the first live project I made that made use of SCSS. The site features a mobile-first responsive design, a service map powered by Google Maps, and automatically pulls and sorts gallery images using the Cloudinary API.",
        githubLink:"https://github.com/OwenM-Edwards/student-psych-frontend",
        demoLink:"https://www.studentpsychiatry.co.uk/calendar/5/2021",
        skillIcons:[
            <img src={jsIcon} data-tip="JavaScript" alt="Javascript"/>, 
            <img src={cssIcon} data-tip="CSS" alt="CSS"/>,
            <img src={sassIcon} data-tip="SASS" alt="SASS"/>,
        ]
    },

    {
        title:"Myth-des",
        image:[websiteD_BG],
        info_a:"Myth-Des is a fictional design company I created to help hone my CSS and SCSS skills. I also used it to experiment with CSS animations, creating a sleek landing page and header animations. It showcases art projects from around Nottingham and some of the fictional brands that they work with.",
        githubLink:"https://github.com/OwenM-Edwards/student-psych-frontend",
        demoLink:"https://www.studentpsychiatry.co.uk/calendar/5/2021",
        skillIcons:[
            <img src={jsIcon} data-tip="JavaScript" alt="Javascript"/>, 
            <img src={cssIcon} data-tip="CSS" alt="CSS"/>,
        ]
    },
];


 export default personalProjectInfo;



 