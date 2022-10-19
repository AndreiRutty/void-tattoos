import React, { useState } from "react";
import { interviewData } from "../data";
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Interview = () => {
  const { title, btnText, btnIcon } = interviewData;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="bg-dark section bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[880px]">
            {/* Title */}
            <motion.h3
              variants={fadeIn("down")}
              className="text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize mb-8"
            >
              {title}
            </motion.h3>
            <motion.div variants={fadeIn("down")}>
              {/* Play Button */}
              <div
                onClick={() => setIsOpen(true)}
                className="text-white flex items-center gap-x-5 cursor-pointer hover:opacity-80 transition"
              >
                {/* Border */}
                <div className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border-[2.5px] border-white rounded-full text-dark p-[3px] hover:scale-[1.05] transition ease-in duration-[250ms]">
                  {/* Inner */}
                  <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                    <div className="pl-1">{btnIcon}</div>
                  </div>
                </div>
                {/* Button Text */}
                <div className="font-primary uppercase tracking-[0.1em]">
                  {btnText}
                </div>
              </div>
            </motion.div>
            {/* Modal Video */}
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="_l1mqYQuNf8"
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Interview;
