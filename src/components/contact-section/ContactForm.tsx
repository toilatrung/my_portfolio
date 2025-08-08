import React, { useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      try {
        const result: EmailJSResponseStatus = await emailjs.sendForm(
          'service_lgzm96p',
          'template_lgzm96p',
          form.current,
          'QJ2L2dR5NHMu17PcB'
        );
        console.log(result.text);
        alert('Message sent!');
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
        }
        alert('Failed to send message.');
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
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
