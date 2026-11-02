interface ContactInfoProps {
  name: string;
  email: string;
  phone: string;
  address?: string;
}

export default function ContactInfo({ name, email, phone, address }: ContactInfoProps) {
    return (
        <section className="mt-8 p-4 border-l-4 border-blue-600 bg-gray-50 rounded text-gray-800">
            <h3 className="text-xl font-bold mb-3 text-black">Contact Information</h3>
            <p className="mb-2"><strong>Name:</strong> {name}</p>
            <p className="mb-2"><strong>Email:</strong> {email}</p>
            <p className="mb-2"><strong>Phone:</strong> {phone}</p>
            {address && (
                <p className="mb-2"><strong>Address:</strong> {address}</p>
            )}
        </section>
    );
}
