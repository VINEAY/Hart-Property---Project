"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-hart-dark text-white py-16">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-center text-3xl md:text-4xl font-raleway mb-16">
          <span className="font-bold">CONTACT</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="w-full md:w-1/3 flex justify-center mb-10 md:mb-0">
            <div className="w-48 h-48 relative">
              <Image
                src="https://static.wixstatic.com/media/b3c5db_0c574534f5904c6b9932872c0c00851a.png/v1/fill/w_250,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b3c5db_0c574534f5904c6b9932872c0c00851a.png"
                alt="Hart Property Development Logo"
                fill
                className="object-contain"
                crossOrigin="anonymous"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3">
            <p className="mb-6 text-center md:text-left">
              For any general inquiries, please fill in the following contact form:
            </p>

            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500 p-4 rounded">
                <p className="text-green-300 font-medium">Success! Message received.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-hart-blue"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-hart-blue"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-hart-blue"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-hart-blue resize-none"
                  />
                </div>
                <div className="flex justify-center md:justify-start mt-6">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-transparent hover:bg-hart-blue border border-white hover:border-hart-blue transition-colors duration-300 font-bold tracking-wide"
                  >
                    SEND
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
