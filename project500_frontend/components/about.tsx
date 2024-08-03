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
    </div>
  );
};

export default about;
