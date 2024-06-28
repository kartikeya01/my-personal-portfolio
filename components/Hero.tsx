import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import LetsConnectButton from "./ui/LetsConnectButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-40 left-full h-[80vh] w-[50vw]"
          fill="pruple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] v-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="maxw-[89vw] md:max-2-2xl lg:max-2-[60vw= flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Design. Build. Improve.
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Hi, my name is Kartikeya Ranjan."
          />
          <p className="text-center w-1/2 md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl mx-auto px-4 md:px-8">
            I&apos;m a Software Developer based in India, I specialize in
            designing and building web applications with engaging and
            interactive user experiences.
          </p>
          <a
            href="https://www.linkedin.com/in/kartikeya-ranjan-845693201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LetsConnectButton
              title="Let's Connect"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
