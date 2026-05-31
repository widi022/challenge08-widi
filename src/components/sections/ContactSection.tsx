import { useState, type FormEvent } from "react";
import ContactModal from "../layout/ContactModal";
import Button from "../ui/Button"; 

export default function ContactSection() {
  const [modalType, setModalType] = useState<"success" | "error" | null>(null);
  const inputClass =
    "w-full bg-gray-100 dark:bg-neutral-800 border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none transition";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // logic kirim API
      setModalType("success");
    } catch {
      setModalType("error");
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-4 md:py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Ready to Start? Let's Talk.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            Tell us what you need, and we'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                className={inputClass}
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className={inputClass}
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Enter your message"
                required
              />
            </div>

            <Button type="submit" variant="primary">
              Send
            </Button>
          </form>
        </div>
      </section>

      {modalType && (
        <ContactModal type={modalType} onClose={() => setModalType(null)} />
      )}
    </>
  );
}
