interface ContactInfoProps {
  name: string;
  email: string;
  phone: string;
  address?: string;
}

export default function ContactInfo({ name, email, phone, address }: ContactInfoProps) {
    return (
        <section className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-white text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-white text-lg text-gray-700 mb-2"><strong>Name:</strong> {name}</p>
            <p className="text-white text-lg text-gray-700 mb-2"><strong>Email:</strong> {email}</p>
            <p className="text-white text-lg text-gray-700 mb-2"><strong>Phone:</strong> {phone}</p>
            {address && (
                <p className="text-white text-lg text-gray-700 mb-2"><strong>Address:</strong> {address}</p>
            )}
        </section>
    );
}