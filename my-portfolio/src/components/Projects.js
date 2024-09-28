
import { SiGithub } from "react-icons/si";
import './projects.css';

const projects = [
  {
    name: "OpenAI ChatBot",
    description: "I built a simple chatbot using OpenAI's APIs to provide intelligent responses to user queries. The bot uses natural language processing to understand and respond to questions in real time.",
    tags: [
      {
        name: "react",
        color: ""
      },
      {
        name: "openai",
        color: "",
      },
      {
        name: "api",
        color: ""
      },
    ],
    image: "./Icons/chatbot.png",
    source_code_link: "https://github.com/Ali-Asjad/openai-chatbot",
    live_demo_link: ""
  },
  {
    name: "Pantry Management App",
    description: "App that allows you to add inventory items including photos and keep track of them. AI search allows you to search for items intelligently as well from image recognition.",
    tags: [
      {
        name: "next.js",
        color: ""
      },
      {
        name: "firebase",
        color: ""
      },
      {
        name: "gemini",
        color: ""
      },
    ],
    image: "./Icons/pantryapp.png",
    source_code_link: "https://github.com/Ali-Asjad/headstarterProject2",
    live_demo_link: ""
  },
  {
    name: "AI Flash Card Generator",
    description: "A web application built with Next.js/React that allows users to generate flashcards from prompts using Gemini API. It leverages the power of Google's AI to extract relevant information, making it easier to learn and reference concepts",
    tags: [
      {
        name: "next.js",
        color: ""
      },
      {
        name: "gemini",
        color: ""
      },
      {
        name: "stripe",
        color: ""
      },
    ],
    image: "./Icons/comingsoon.jpg",
    source_code_link: "https://github.com/Ali-Asjad/geminiAi-flashcardBot",
    live_demo_link: ""
  },
  {
    name: "Portfolio Website",
    description: "You are looking at it right now! This React project showcases my skills and projects as a full-stack developer. The site highlights my experience, recent work, and passion for web-design, back-end development, and cloud technologies.",
    tags: [
      {
        name: "next.js",
        color: ""
      },
      {
        name: "firebase",
        color: ""
      },
      {
        name: "gemini",
        color: ""
      },
    ],
    image: "./Icons/portfolio.png",
    source_code_link: "https://github.com/Ali-Asjad/personalWebsite",
    live_demo_link: "#"
  },

]

const ProjectCard = ({ name, description, tags, image, source_code_link, live_demo_link }) => {

  return (
    <div
      className="project-card"
      onClick={() => {
        if (live_demo_link === "#") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.open(live_demo_link, "_blank");
        }
      }}
    >
      <img 
        src={image}
        alt={name}
        className="project-image"
      />

      <div className="github-icon-container">
        <div 
          onClick={(e) => {
            e.stopPropagation();
            window.open(source_code_link, "_blank");
          }}
          className="github-icon"
        >
          <SiGithub />
        </div>
      </div>

      <div className="project-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag.name} className="project-tag">
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="header">
        <p>My Work</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

