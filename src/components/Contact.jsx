"use client";

import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-[#050816] text-white overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          Contact <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="space-y-6">

            <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:scale-[1.02] transition">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">sabbirhosain725@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:scale-[1.02] transition">
              <FaPhone className="text-green-400 text-2xl" />
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">+8801889411788</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:scale-[1.02] transition">
              <FaWhatsapp className="text-emerald-400 text-2xl" />
              <div>
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <p className="text-white font-medium">+8801889411788</p>
              </div>
            </div>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl bg-[#0b1220] border border-white/10 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-xl bg-[#0b1220] border border-white/10 outline-none focus:border-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-xl bg-[#0b1220] border border-white/10 outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-105 transition"
              >
                Send Message 
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;