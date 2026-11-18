import ProjectCard from "@/components/ProjectCard";
import {  fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";
import { ProjectSearch } from "@/components/ProjectSearch";
import { Pagination } from "@/components/Pagination";

export const dynamic = "force-dynamic";

export default async function Projects(props: {
    searchParams?: Promise<{query?: string, page?: string}>
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";
    const page = Number(searchParams?.page) || 1;

    const projects = await fetchFilteredProjects(query, page);
    const totalPages = await fetchProjectsPages(query);

    return (
        <main className="text-white max-w-4xl mx-auto px-4 py-12">
                <h1>Projects Overview</h1>
            <ProjectSearch />  
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
            <Pagination totalPages={totalPages} />
        </main>
    );
}