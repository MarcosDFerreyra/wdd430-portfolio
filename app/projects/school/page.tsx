import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects-db";

export default async function SchoolProjects() {
    const projects = getProjects("school");

    return (
        <main className="text-white max-w-4xl mx-auto px-4 py-12">
            <h1>School Projects</h1>
            <div className="space-y-4">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                    />
                ))}
            </div>
        </main>
    );
}