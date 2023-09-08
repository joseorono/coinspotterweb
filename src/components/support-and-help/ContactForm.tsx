import React, { useState } from 'react';
//import 'daisyui/dist/full.css'; // Import DaisyUI styles

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="flex items-center justify-center">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4 flex justify-between">
          <div className="mr-2 w-1/2">
            <label
              htmlFor="name"
              className="mb-2 block font-bold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="ml-2 w-1/2">
            <label
              htmlFor="phoneNumber"
              className="mb-2 block font-bold text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Your Phone Number"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block font-bold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="mb-2 block font-bold text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input input-bordered h-32 w-full"
            placeholder="Your Message"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="hover:bg-primary-dark btn btn-primary btn-wide"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
