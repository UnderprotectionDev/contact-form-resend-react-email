import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <main className="container mx-auto py-10 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <ContactForm />
    </main>
  );
}
