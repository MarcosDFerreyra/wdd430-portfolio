
import { Suspense } from 'react';
import CardSkeleton from '@/components/CardSkeleton';
import SchoolProjectsList from '@/components/SchoolProyectList';

export default async function SchoolProjects() {

    return (
        <main className="text-white max-w-4xl mx-auto px-4 py-12">
            <h1>School Projects</h1>
            <Suspense fallback={<CardSkeleton />}>
                <SchoolProjectsList />
            </Suspense>
        </main>
    );
}