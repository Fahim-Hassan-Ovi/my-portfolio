import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9dbgcgo",
        "template_1x85pzr",
        form.current,
        "E2HWTgIWNngbTeTtC"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[8vw] md:px-[7vw] lg:px-[10vw] bg-[#0d081f]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-[#24eca0] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 w-full max-w-5xl">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-[#131025] p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white text-center">
            Let's work together 🚀
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-6 flex flex-col space-y-4"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#0d081f] text-white border border-gray-600 focus:outline-none focus:border-[#00FF9C]"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#0d081f] text-white border border-gray-600 focus:outline-none focus:border-[#00FF9C]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#0d081f] text-white border border-gray-600 focus:outline-none focus:border-[#00FF9C]"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#0d081f] text-white border border-gray-600 focus:outline-none focus:border-[#00FF9C]"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#24eca0] to-[#1bb080] py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-gray-300">
          <div className="flex items-center gap-4">
            <div className="bg-[#0d081f] p-3 rounded-lg">
              <FaPhoneAlt className="text-[#24eca0] text-2xl" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Phone</h4>
              <p>01572907791</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#0d081f] p-3 rounded-lg">
              <FaEnvelope className="text-[#24eca0] text-2xl" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Email</h4>
              <p>fahim.hassan.ovi@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#0d081f] p-3 rounded-lg">
              <FaMapMarkerAlt className="text-[#24eca0] text-2xl" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Address</h4>
              <p>Tongi, Gazipur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
