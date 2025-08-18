import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[90vh] pt-16 w-full flex flex-col justify-center items-center">
      <div className="p-2 pr-4 flex rounded-full shadow shadow-[#6D87F5]/15 gap-4 border-2 border-[#6D87F5]/15">
        <Image src="/heroimg1.svg" alt="Hero Image 1" width={56} height={36} />
        <p>Your No.1 Study Planner</p>
      </div>
      <div className="my-5 gap-5 flex flex-col text-center">
        <h1 className="font-black text-5xl text-accent">
          Unlock Your Potential, One Step <br /> at a Time
        </h1>
        <p className="w-3xl font-medium">
          Ditch the messy schedules. StudySync adapts to your pace, tracks your
          progress, and builds a study plan that grows with you so you stay
          confident, consistent, and exam-ready.
        </p>
        <div className="flex w-lg mx-auto my-3 gap-5 items-center justify-center">
          <button className="bg-background w-full dark:bg-background/3 border-2 cursor-pointer border-accent text-accent rounded-xl px-6 py-[10px] font-medium">
            Log In
          </button>
          <button className="bg-accent border-2 w-full cursor-pointer border-accent text-background rounded-xl px-6 py-[10px] font-medium">
            Sign Up
          </button>
        </div>
        <div className="mx-auto mt-10">
            <Image src='/image 1.png' alt='Image 1' width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
