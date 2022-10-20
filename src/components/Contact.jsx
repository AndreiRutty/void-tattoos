import React from "react";
import { contactData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  const { title, info, form } = contactData;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          {/* Text */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1"
          >
            {/* Title */}
            <h2 className="h2 max-w-[490px]">{title}</h2>
            {/* Info Items */}
            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              {info.map((item, index) => {
                const { title, subtitle, address, phone, email, link } = item;
                return (
                  // Item
                  <div key={index}>
                    {/* Title */}
                    <div className="font-primary uppercase font-medium text-xl mb-3">
                      {title}
                    </div>
                    {/* Subtitle */}
                    <div className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]">
                      {subtitle}
                    </div>
                    {/* Address, Phone & Email */}
                    <div className="flex flex-col gap-y-3 mb-8">
                      {/* Address */}
                      <div className="flex items-center gap-[10px]">
                        <div>{address.icon}</div>
                        <div className="font-medium">{address.name}</div>
                      </div>
                      {/* Phone */}
                      <div className="flex items-center gap-[10px]">
                        <div>{phone.icon}</div>
                        <div className="font-medium">{phone.number}</div>
                      </div>
                      {/* Email */}
                      <div className="flex items-center gap-[10px]">
                        <div>{email.icon}</div>
                        <div className="font-medium">{email.address}</div>
                      </div>
                    </div>
                    {/* Link */}
                    <a
                      className="font-medium border-b border-dark pb-[5px]"
                      href="#"
                    >
                      {link}
                    </a>
                  </div>
                );
              })}
            </div>
          </motion.div>
          {/* Form */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 xl:pl-[40px] flex justify-center items-center "
          >
            <form className="flex flex-col gap-y-10 w-full">
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                type="text"
                placeholder={form.name}
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                type="text"
                placeholder={form.email}
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 xl:mb-[30px]"
                type="text"
                placeholder={form.message}
              />
              <button className="self-start btn btn-sm btn-dark">
                {form.btnText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
