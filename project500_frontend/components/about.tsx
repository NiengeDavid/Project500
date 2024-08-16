import React from "react";
import TextGenerateEffectDemo from "./example/text-generate-effect-demo-2";
import { GlobeDemo } from "./example/globeTest";

const about = () => {
  return (
    <div className="bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-black z-40 overflow-x-hidden lg:mt-0">
      <div className="mt-12 max-w-screen-xl flex flex-col space-y-6 px-4 justify-between items-center mx-auto lg:flex-row lg:space-y-0 lg:space-x-6 ">
        <div>
          <TextGenerateEffectDemo />
        </div>

        <div className="w-full">
          <GlobeDemo />
        </div>
        {/* <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-black z-40" /> */}
      </div>

      <div className="bg-white my-10 flex flex-col max-w-screen-xl justify-between items-center space-y-4 mx-auto px-5 py-10 rounded-xl md:flex-row md:space-y-0 md:space-x-4">
        <div className="w-full flex flex-col items-center justify-between space-y-4 mx-auto p-6 border m-5 rounded-xl">
          <h1 className="text-xl text-black font-semibold font-sans text-start">
            Vision
          </h1>

          <p className="text-black text-start font-sans font-light">
            To inspire a generation of African children with dyslexia to reach
            their full potential and become all that God has designed them to
            be.
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-between space-y-4 mx-auto p-6 border m-5 rounded-xl">
          <h1 className="text-xl text-black font-semibold font-sans text-start">
            Mission
          </h1>

          <p className="text-black text-start font-sans font-light">
            To equip a network of passionate volunteers across Africa with the
            knowledge and tools to educate and empower children with dyslexia.
            Through focused programs in schools, we instill confidence,
            resilience, and a profound recognition of the unique strengths of
            children with dyslexia. By building a community of dyslexia-aware
            children in Africa, we aim to cultivate a future generation where
            dyslexic individuals thrive in a supportive environment, confidently
            leveraging their strengths to drive innovation in Africa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
