import websiteA_BG from  "../img/website-a.jpg";
import websiteA_BG_2 from  "../img/website-a-2.png";
import websiteA_BG_3 from  "../img/website-a-3.png";
import websiteB_BG from  "../img/website-b.jpg";
import websiteB_BG_2 from  "../img/website-b-2.png";
import websiteB_BG_3 from  "../img/website-b-3.png";
import websiteC_BG from  "../img/website-c.jpg";
import websiteC_BG_2 from  "../img/website-c-2.png";
import websiteC_BG_3 from  "../img/website-c-3.png";
import websiteD_BG from  "../img/website-d.jpg";
import websiteD_BG_2 from  "../img/website-d-2.png";
import websiteD_BG_3 from  "../img/website-d-3.png";

const projectInfo = [
   {
      title:"Student Psychiatry",
      image:[websiteA_BG],
      info:"Student psychiatry was initially designed to help students securely organise online events during Covid lockdown. Event organisers must register using an approved email domain to add their own events. Each event has public links, for anyone to view, and private links which can only be viewed by registered users. This helps organiser protect their open event links. The Node.JS server handles user sessions with express session, this was the first time I used this technology and it taught me a lot. Mention sequelize too.",
      githubLink:"https://github.com/OwenM-Edwards/student-psych-frontend",
      demoLink:"https://www.studentpsychiatry.co.uk/calendar/5/2021",
   },

   {
      title:"Community NPC Generator",
      image:[websiteB_BG],
      info:"The Community NPC Gen is a random character creator for us in tabletop games. An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use. This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.",
      githubLink:"https://github.com/OwenM-Edwards/student-psych-frontend",
      demoLink:"https://www.studentpsychiatry.co.uk/calendar/5/2021",
   },

   {
      title:"Oakfield Photography",
      image:[websiteC_BG],
      info:"They were in serious need of a website redesign, and I was happy to oblige. This was the first live project I made that made use of SCSS. The site features a mobile-first responsive design, a service map powered by Google Maps, and automatically pulls and sorts gallery images using the Cloudinary API.",
      githubLink:"https://github.com/OwenM-Edwards/student-psych-frontend",
      demoLink:"https://www.studentpsychiatry.co.uk/calendar/5/2021",
   },

   {
      title:"Myth-des",
      image:[websiteD_BG],
      info:"Myth-Des is a fictional design company I created to help hone my CSS and SCSS skills. I also used it to experiment with CSS animations, creating a sleek landing page and header animations. It showcases art projects from around Nottingham and some of the fictional brands that they work with.",
      githubLink:"https://github.com/OwenM-Edwards/student-psych-frontend",
      demoLink:"https://www.studentpsychiatry.co.uk/calendar/5/2021",
   },
];


 export default projectInfo;