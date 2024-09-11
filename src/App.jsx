import Contact from "./components/Contact";
import ProjectList from "./components/ProjectList";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Socials from "./components/Socials";
import About from "./components/About";

import p_portfolio from "../src/assets/p_portfolio.jpg";
import p_captured from "../src/assets/p_captured.jpg";
import p_budgetTracker from "../src/assets/p_budgetTracker.png";
import p_todo from "../src/assets/p_todo.png";
import p_snake from "../src/assets/p_snake.png";
import p_company from "../src/assets/p_company.png";

function App() {
  const projects = [
    {
      image: p_budgetTracker,
      title: "Finance Tracker",
      description:
        "Budget Tracker app to keep record of the budget and manage the expenses.",
      link: "https://github.com/Anjan-Giri/Budget-Tracker",
    },
    {
      image: p_company,
      title: "Demo Website",
      description: "A demo full-stack website for an IT company.",
      link: "https://github.com/Anjan-Giri/Company-Website",
    },
    {
      image: p_todo,
      title: "Simple To-Do App",
      description: "A simple to do app to keep track of your tasks.",
      link: "https://github.com/Anjan-Giri/Simple-To-Do-App",
    },
    {
      image: p_portfolio,
      title: "Portfolio Page",
      description: "A portfolio page with attractive and responsive design.",
      link: "https://github.com/Anjan-Giri/Portfolio-Page",
    },
    {
      image: p_captured,
      title: "Static Website",
      description: "An attractive demo website for a camera shop.",
      link: "https://github.com/Anjan-Giri/Website-for-a-Camera-Shop",
    },
    {
      image: p_snake,
      title: "Snake Game",
      description: "A snake game using JavaScript and simple HTML and CSS.",
      link: "https://github.com/Anjan-Giri/Snake-Game",
    },
  ];

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <ProjectList projects={projects} />
      <Contact />
      <Socials />
    </>
  );
}

export default App;
