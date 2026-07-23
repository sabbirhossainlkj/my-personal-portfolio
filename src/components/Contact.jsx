"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

// কন্টাক্ট ইনফো ডাটা অ্যারে (ক্লিন ও মেইনটেনেবল রাখার জন্য)
const CONTACT_INFO = [
  {
    id: "email",
    label: "Email",
    value: "sabbirhosain725@gmail.com",
    icon: <FaEnvelope />,
    iconColor: "text-blue-400",
    borderColor: "hover:border-blue-500/30",
    link: "mailto:sabbirhosain725@gmail.com",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+8801889411788",
    icon: <FaPhone />,
    iconColor: "text-green-400",
    borderColor: "hover:border-green-500/30",
    link: "tel:+8801889411788",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+8801889411788",
    icon: <FaWhatsapp />,
    iconColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/30",
    link: "https://wa.me/8801889411788",
  },
];

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ContactSection = () => {
  // ফর্ম স্টেট ম্যানেজমেন্ট (MERN Stack API বা EmailJS ইন্টিগ্রেশনের জন্য প্রস্তুত)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে আপনার ব্যাকএন্ড এপিআই সাবমিশন লজিক বসবে
    console.log("Submitted Data:", formData);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-[#050816] text-white overflow-hidden"
    >
      {/* Background Ambient Glowing Radiuses */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-tight"
        >
          Contact <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {CONTACT_INFO.map((info) => (
              <motion.a
                key={info.id}
                href={info.link}
                target={info.id === "whatsapp" ? "_blank" : "_self"}
                rel={info.id === "whatsapp" ? "noopener noreferrer" : undefined}
                variants={cardVariants}
                className={`flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:scale-[1.01] ${info.borderColor} transition-all duration-300 group cursor-pointer`}
              >
                <div className={`${info.iconColor} text-2xl group-hover:scale-110 transition duration-300`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{info.label}</p>
                  <p className="text-white font-medium text-sm md:text-base mt-0.5 break-all">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right Column: Dynamic Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={formVariants}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-xl relative group"
          >
            <div className="absolute inset-0 border border-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-3.5 rounded-xl bg-[#0b1220]/80 border border-white/10 outline-none focus:border-blue-500 text-white text-sm transition duration-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-3.5 rounded-xl bg-[#0b1220]/80 border border-white/10 outline-none focus:border-blue-500 text-white text-sm transition duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full p-3.5 rounded-xl bg-[#0b1220]/80 border border-white/10 outline-none focus:border-blue-500 text-white text-sm resize-none transition duration-300"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 font-semibold shadow-lg text-sm tracking-wide transition duration-200 cursor-pointer"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;