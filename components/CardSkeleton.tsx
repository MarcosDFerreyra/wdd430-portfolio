export default function CardSkeleton() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-8 animate-pulse">
            <div className="mb-4 h-7 w-56 rounded bg-gray-700" />

            {[1, 2].map((item) => (
                <div
                    key={item}
                    className="mb-6 rounded-lg border-l-8 border-indigo-500 bg-gray-100 p-6"
                >
                    {/* Project title */}
                    <div className="mb-4 h-8 w-1/3 rounded bg-gray-300" />
                    {/* Description */}
                    <div className="mb-4 h-5 w-1/2 rounded bg-gray-300" />
                    {/* Technologies */}
                    <div className="mb-4 h-5 w-1/4 rounded bg-gray-300" />
                    {/* View Project link */}
                    <div className="h-6 w-32 rounded bg-indigo-200" />
                </div>
            ))}
        </section>
    );
}