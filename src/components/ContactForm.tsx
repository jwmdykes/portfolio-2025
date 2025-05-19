import { FormEvent, useState } from 'react';

// this is not a private key
const web3FormAccessKey = 'c484318c-85d9-4017-8076-821d1f647dc5';

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) {
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append('access_key', web3FormAccessKey);

    setLoading(true);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    setLoading(false);

    if (response.ok) {
      form.reset();
    } else {
      alert(
        'There was an error sending your message... Please contact directly at 98johndykes@gmail.com'
      );
    }
  }

  return (
    <form
      className="mt-8 grid grid-cols-1 gap-6 max-w-2xl mx-auto"
      onSubmit={submit}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-neutral-200 text-sm font-medium mb-2"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="shadow-sm bg-neutral-700 border border-neutral-600 text-neutral-100 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5"
          placeholder="John Doe"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-neutral-200 text-sm font-medium mb-2"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow-sm bg-neutral-700 border border-neutral-600 text-neutral-100 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5"
          placeholder="john.doe@example.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="reason"
          className="block text-neutral-200 text-sm font-medium mb-2"
        >
          Reason For Contact
        </label>
        <select
          id="reason"
          name="reason"
          className="shadow-sm bg-neutral-700 border border-neutral-600 text-neutral-100 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5"
        >
          <option value="">Select a reason</option>
          <option value="general_inquiry">Recruiter/Employment Inquiry</option>
          <option value="project_proposal">Project Proposal</option>
          <option value="collaboration">Collaboration</option>
          <option value="feedback">Website Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-neutral-200 text-sm font-medium mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="shadow-sm bg-neutral-700 border border-neutral-600 text-neutral-100 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5"
          placeholder="Your message here..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="hover:enabled:cursor-pointer py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-icon-fill-focus accent active:enabled:brightness-80  transition-all duration-300 flex gap-2 justify-center items-center disabled:bg-icon-fill-focus/60 disabled:text-white/70"
        disabled={loading}
      >
        {loading && (
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 animate-spin fill-white/70"
          >
            <path d="m22 11a1 1 0 0 0 -1 1 9 9 0 1 1 -9-9 8.9 8.9 0 0 1 4.42 1.166l-1.127 1.127a1 1 0 0 0 .707 1.707h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1.707-.707l-1.411 1.407a10.9 10.9 0 0 0 -5.882-1.7 11 11 0 1 0 11 11 1 1 0 0 0 -1-1z"></path>
          </svg>
        )}
        Send Message
      </button>
    </form>
  );
}
