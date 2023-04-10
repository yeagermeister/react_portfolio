import React from 'react';
import Project from '../Project';

const projects = [
	{
    id: 1,
    projectName: "Springhunters",
    img: process.env.PUBLIC_URL + '/images/springhunters-splash.png',
    alt: "Springhunters Website",
    type: "Node, Express, Mysql",
    link: "https://springhunters1.herokuapp.com",
    githubLink: "https://github.com/yeagermeister/springhunters-dev"
},
{
  id: 2,
  projectName: "HTML Portfolio",
  img: process.env.PUBLIC_URL + '/images/portfolio.png',
  alt: "HTML Portfolio",
  type: "HTML, CSS, Javascript",
  link: "https://yeagermeister.github.io/portfolio/",
  githubLink: "https://github.com/yeagermeister/portfolio"
},
{
  id: 3,
  projectName: "Weather Dashboard",
  img: process.env.PUBLIC_URL + '/images/weather-dashboard.png',
  alt: "Weather Dashboard",
  type: "HTML, CSS, Javascript",
  link: "https://yeagermeister.github.io/weather_dashboard/",
  githubLink: "https://github.com/yeagermeister/weather_dashboard"
},
{
  id: 4,
  projectName: "Password Generator",
  img: process.env.PUBLIC_URL + '/images/password-generator.png',
  alt: "Password Generator",
  type: "HTML, CSS, Javascript",
  link: "https://yeagermeister.github.io/password_generator/",
  githubLink: "https://github.com/yeagermeister/password_generator"
},
{
  id: 5,
  projectName: "Code Quiz",
  img: process.env.PUBLIC_URL + '/images/code-quiz.png',
  alt: "Code Quiz",
  type: "HTML, CSS, Javascript",
  link: "https://yeagermeister.github.io/codequiz/",
  githubLink: "https://github.com/yeagermeister/codequiz"
},
{
  id: 6,
  projectName: "React Portfolio",
  img: process.env.PUBLIC_URL + '/images/react-profile.png',
  alt: "React Portfolio",
  type: "React",
  link: "https://yeagermeister.github.io/react_portfolio/",
  githubLink: "https://github.com/yeagermeister/react_portfolio"
}

];

export default function Portfolio() {


  return (
    <div class='container'>
      <h1 className='p-2'>My Published Projects</h1>
      <Project projects={projects} />
    </div>
  );
}
