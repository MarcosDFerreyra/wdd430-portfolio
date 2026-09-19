import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects-db";

export default async function Projects({
    searchParams,
}: {
    searchParams: Promise<{ type?: string }>;
}) {
    const { type } = await searchParams;
    const projects = getProjects(type);

    return (
        <main className="text-white max-w-4xl mx-auto px-4 py-12">
            <h1>Projects Overview</h1>
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