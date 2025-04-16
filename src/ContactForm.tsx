export function ContactForm() {
  return (
    <form className="mt-8 grid grid-cols-1 gap-6 max-w-2xl mx-auto">
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
          <option value="general_inquiry">General Inquiry</option>
          <option value="project_proposal">Project Proposal</option>
          <option value="collaboration">Collaboration</option>
          <option value="feedback">Feedback</option>
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
        className="hover:cursor-pointer py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-accent hover:brightness-90 active:brightness-80  transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
