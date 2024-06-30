import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Dan, a Full Stack Developer based in Israel.
          </p>

          <div className="relative group">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full border-4 border-purple-500 shadow-lg transform transition-transform duration-300 hover:scale-105 object-cover"
            />
            <div className="absolute inset-0 rounded-full border-4 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

