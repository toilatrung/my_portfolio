import React, { useRef, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const result: EmailJSResponseStatus = await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        console.log(result.text);
        alert('Message sent!');
        form.current.reset();
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
        }
        alert('Failed to send message.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} ref={form} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border px-3 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border px-3 py-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={9}
          required
          className="border px-3 py-2 rounded resize-none"
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
