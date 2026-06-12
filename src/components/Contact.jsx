"use client";

import { FaEnvelope, FaPhone, FaWhiteHat, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }, 
    },
  };

  const infoCardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-[#050816] text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20"
        >
          Contact <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.div
              variants={infoCardVariants}
              className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:scale-[1.02] hover:border-blue-500/30 transition duration-300 group"
            >
              <FaEnvelope className="text-blue-400 text-2xl group-hover:scale-110 transition duration-300" />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">sabbirhosain725@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              variants={infoCardVariants}
              className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:scale-[1.02] hover:border-green-500/30 transition duration-300 group"
            >
              <FaPhone className="text-green-400 text-2xl group-hover:scale-110 transition duration-300" />
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">+8801889411788</p>
              </div>
            </motion.div>

            <motion.div
              variants={infoCardVariants}
              className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:scale-[1.02] hover:border-emerald-500/30 transition duration-300 group"
            >
              <FaWhatsapp className="text-emerald-400 text-2xl group-hover:scale-110 transition duration-300" />
              <div>
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <p className="text-white font-medium">+8801889411788</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={formVariants}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg relative group"
          >
            <div className="absolute inset-0 border border-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl bg-[#0b1220] border border-white/10 outline-none focus:border-blue-500 transition duration-300"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-xl bg-[#0b1220] border border-white/10 outline-none focus:border-blue-500 transition duration-300"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-xl bg-[#0b1220] border border-white/10 outline-none focus:border-blue-500 transition duration-300"
              ></textarea>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(37, 99, 235, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold shadow-lg transition duration-200"
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