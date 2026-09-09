import ProjectList from "@/components/ProjectList";
const projects = [
  {
    title: "MovieVault",
    description: "A web application that allows users to search for movies, view details, and manage their favorite movies.",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap", "TMDB API"],
    link: "https://movievault-shkx.onrender.com",
  },
  {
    title: "Imagine Dragons Fan Page",
    description: "a fan page for the band Imagine Dragons, featuring information about the band and their music with their most famous albums.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/MarcosDFerreyra/wdd231/tree/main/project",
  },
]

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          Hi! this is my portfolio. I'm a student developer currently learning about Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
