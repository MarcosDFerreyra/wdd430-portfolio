export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Description for Project 1',
        type: 'opensource',
        technologies: ['TypeScript', 'React'],
        link: '/projects/1'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Description for Project 2',
        type: 'school',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        link: '/projects/2'
    }
];

export function getProjects(type?: string | null): Project[] { 
    if (type) 
        return projects.filter(project => project.type === type);
    return projects;
}

export function getProjectById(id: number): Project | null{
    return projects.find(project => project.id === id) ?? null
}