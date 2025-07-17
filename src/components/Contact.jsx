import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE;
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE;
const EMAILJS_PUBLICKEY = import.meta.env.VITE_EMAILJS_PUBLICKEY;
const PERSONAL_EMAIL = import.meta.env.VITE_PERSONAL_EMAIL;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!form.name.trim()) {
      errors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!form.message.trim()) {
      errors.message = "Message is required.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    emailjs
      .send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name: form.name,
          to_name: "Kevin",
          from_email: form.email,
          to_email: PERSONAL_EMAIL,
          message: form.message,
        },
        EMAILJS_PUBLICKEY
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Message has been sent. I will get back to you as soon as possible."
          );
          setForm({ name: "", email: "", message: "" });
          setFormErrors({});
        },
        (error) => {
          console.error(error);
          alert(
            "Message has not been sent. Something went wrong with the service."
          );
          setLoading(false);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {formErrors.name && (
              <span className="text-red-400 text-sm mt-1">
                {formErrors.name}
              </span>
            )}
          </label>

          {/* Email Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {formErrors.email && (
              <span className="text-red-400 text-sm mt-1">
                {formErrors.email}
              </span>
            )}
          </label>

          {/* Message Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {formErrors.message && (
              <span className="text-red-400 text-sm mt-1">
                {formErrors.message}
              </span>
            )}
          </label>

          {/* Submit Button */}
          <div className="flex flex-row justify-center">
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-tertiary py-3 px-10 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-gradient-to-r from-purple-600 to-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send"}
            </motion.button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
