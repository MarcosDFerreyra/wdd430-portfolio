import ProjectCard from "@/components/ProjectCard";
import { getBaseUrl } from "@/lib/getBaseUrl";

export default async function Projects() {
    const res = await fetch(`${getBaseUrl()}/api/projects`);
    const projects = await res.json();

    return (
        <main className="text-white max-w-4xl mx-auto px-4 py-12">
            <h1>Projects Overview</h1>
            <div className="space-y-4">
                {projects.map((project: any) => (
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