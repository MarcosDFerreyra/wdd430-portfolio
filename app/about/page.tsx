import ContactInfo from "@/components/contact";

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700">
                This about page shares more information about my background and work.
            </p>
            <ContactInfo name="Marcos Ferreyra" email="marcosferrey30@gmail.com" phone="+54 11 6248 0976" address="Florencion Varela, Buenos Aires, Argentina" />
        </main>
    );
}