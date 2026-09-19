import ProjectCard from "@/components/ProjectCard";

export default async function OpenSourceProjects() {
    const res = await fetch('http://localhost:3000/api/projects?type=opensource');
    const projects = await res.json();

    return (
        <main className="text-white max-w-4xl mx-auto px-4 py-12">
            <h1>Open Source Projects</h1>
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