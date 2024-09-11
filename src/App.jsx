import Contact from "./components/Contact";
import ProjectList from "./components/ProjectList";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Socials from "./components/Socials";
import About from "./components/About";

function App() {
  const projects = [
    {
      image: "https://via.placeholder.com/400",
      title: "Project 1",
      description: "Description 1",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Project 2",
      description: "Description 2",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Project 3",
      description: "Description 3",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Project 4",
      description: "Description 4",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Project 5",
      description: "Description 5",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Project 4",
      description: "Description 4",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Project 5",
      description: "Description 5",
      link: "#",
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
