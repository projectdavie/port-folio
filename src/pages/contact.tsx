const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="mt-8 max-w-lg w-full space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-4 w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
