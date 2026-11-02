import ContactInfo from "@/components/Contact-information";

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
                I am a Software Development student at BYU-Idaho Pathway, based in Florencio Varela, Argentina.
                I'am currently learning full-stack web development with Next.js, React, and TypeScript.
            </p>
            <ContactInfo
                name="Marcos Ferreyra"
                email="marcos30@gmail.com"
                phone="+54 1234 5678"
                address="Florencio Varela, Buenos Aires, Argentina"
            />
        </main>
    );
}
