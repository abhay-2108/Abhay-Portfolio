import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import SocialMedia from "./SocialMedia";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Abhay Tiwari",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      })
      .catch((error) => {
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact-section py-24" id="contact">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header text-center mb-16"
        >
          <h2 className="section-title text-gradient inline-block">Get In Touch</h2>
          <p className="section-subtitle mt-4 text-white/60">Let's build something extraordinary together</p>
        </motion.div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info-card glass"
          >
            <div>
              <h3 className="font-space font-bold text-white mb-4">Contact Information</h3>
              <p className="text-white/60 leading-relaxed max-w-sm">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              <div className="py-8"> {/* Tailwind padding as backup */}
                <SocialMedia />
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-white/5">
              <p className="text-xs text-white/40 mb-3 uppercase tracking-widest font-bold">Quick Communication</p>
              <a href="mailto:abhaytiwari0821@gmail.com" className="text-xl md:text-2xl font-space font-bold hover:text-primary transition-colors block break-all">abhaytiwari0821@gmail.com</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-wrapper glass"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Your Name"
                  />
                  {errors.name && <span className="text-xs text-red-500 mt-2 block">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <span className="text-xs text-red-500 mt-2 block">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="6"
                  className={`w-full ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="How can I help you?"
                />
                {errors.message && <span className="text-xs text-red-500 mt-2 block">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-premium disabled:opacity-50"
              >
                {loading ? "Transmitting..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
