import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects-db";

export default async function SchoolProjectsList() {
    const projects = await getProjects("school");
    return (
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
    );
}