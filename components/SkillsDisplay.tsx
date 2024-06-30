"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills } from "@/data";
import Advantages from "@/components/Advantages"; 

const SkillsDisplay = () => {
  return (
    <section id="skills" className="py-20">
      <div className="py-20 w-full">
        <h1 className="heading">
          My <span className="text-purple">skills</span>
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
        <AnimatePresence>
          {Object.keys(skills).map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center mb-9 p-4"
            >
              <div className="py-3 w-full">
                <h2 className="heading text-sm">
                   <span className="text-purple">{category}</span>
                </h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                {skills[category as keyof typeof skills].map((skill) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="flex md:max-w-60 max-w-32 gap-2"
                  >
                    {category !== 'toolsTechnologies' && (
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="md:w-18 w-12"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Adding the Advantages component */}
      <Advantages />
    </section>
  );
};

export default SkillsDisplay;
