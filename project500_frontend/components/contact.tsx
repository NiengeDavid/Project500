"use client";
import React, { useState } from "react";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Error state for validation
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle change function to update state
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Form validation logic
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some((error) => error !== "");
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    if (!validateForm()) {
      return;
    }

    // First email content for your client
    const clientEmailContent = {
      to: "dyslexiaprojectafrica@gmail.com", //client’s email address
      subject: formData.subject,
      htmlContent: `
        <p>You’ve received a new message from Project500's Website contact form:</p>
        <ul>
          <li><strong>Name:</strong> ${formData.name}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Subject:</strong> ${formData.subject}</li>
          <li><strong>Message:</strong> ${formData.message}</li>
        </ul>
      `,
      textContent: `You’ve received a new message from Project500 Website Contact Form:\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`,
    };

    // Second email content for the user
    const userEmailContent = {
      to: formData.email,
      subject: "We Received Your Message - Thank You!",
      htmlContent: `
        <p>Hello ${formData.name},</p>
        <p>Thank you for reaching out to us! We've received your message and will get back to you shortly.</p>
        <p><strong>Here’s a summary of what you sent:</strong></p>
        <ul>
          <li><strong>Subject:</strong> ${formData.subject}</li>
          <li><strong>Message:</strong> ${formData.message}</li>
        </ul>
        <p>We’ll respond as soon as possible. Meanwhile, feel free to explore more on our website.</p>
        <p>Best regards,</p>
        <p>Dyslexia Project500 Support Team</p>
      `,
      textContent: `Hello ${formData.name},\n\nThank you for reaching out to us! We've received your message and will get back to you shortly.\n\nBest regards,\nDyslexia Project500 Support Team`,
    };

    try {
      // Send the client email first
      const clientResponse = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientEmailContent),
      });

      const result = await clientResponse.json();

      if (clientResponse.ok) {
        // If client email is sent successfully, send the user email
        const userResponse = await fetch("/api/sendMail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userEmailContent),
        });

        const result2 = await userResponse.json();

        if (userResponse.ok) {
          setSuccessMessage("Your message has been sent successfully.");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          setErrorMessage(result2.error || "Failed to send your message.");
        }
      } else {
        setErrorMessage(result.error || "Failed to send your message.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-lg text-center text-gray-500 md:text-xl">
            Get in touch, leave a message and we&apos;ll get right back to you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block mb-2 text-sm text-start font-medium text-gray-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-zinc-500 focus:border-zinc-500"
                placeholder="Your Name"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm text-start font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5"
                placeholder="name@hello.com"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm text-start font-medium text-gray-900">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-zinc-500 focus:border-zinc-500"
                placeholder="Let us know how we can help you"
                required
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm text-start font-medium text-gray-900">
                Your message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-zinc-500 focus:border-zinc-500"
                placeholder="Leave a comment..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-black/80 focus:ring-4 focus:outline-none focus:ring-zinc-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
          {successMessage && (
            <p className="text-green-500 text-center mt-4">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
