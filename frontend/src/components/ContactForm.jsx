import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validation
  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!emailPattern.test(formData.user_email)) {
      newErrors.user_email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  // Submit to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setFail(false);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5050/api/contact", formData);

      if (response.status === 200) {
        setSuccess(true);
        setFormData({ user_name: "", user_email: "", message: "" });
        setErrors({});
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setFail(true);
    } finally {
      setLoading(false);
    }
  };

  // Track changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white text-black">
      <div className="container mx-auto max-w-xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

        {/* Alerts */}
        {success && <p className="text-green-600 mb-4">Message sent successfully!</p>}
        {fail && <p className="text-red-600 mb-4">Failed to send message.</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md ${errors.user_name ? "border-red-500" : ""}`}
          />
          {errors.user_name && <p className="text-red-500 text-sm -mt-2">{errors.user_name}</p>}

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md ${errors.user_email ? "border-red-500" : ""}`}
          />
          {errors.user_email && <p className="text-red-500 text-sm -mt-2">{errors.user_email}</p>}

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md ${errors.message ? "border-red-500" : ""}`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm -mt-2">{errors.message}</p>}

          <button
            type="submit"
            className="bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1da851] transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;