import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-2">
                <div id="header-title" className="text-2xl font-bold">Marcos Ferreyra</div>
                <nav aria-label="Main navigation">
                    <ul className="flex gap-6">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/about" className="hover:underline">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
