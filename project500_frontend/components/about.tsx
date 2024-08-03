import React from "react";
import TextGenerateEffectDemo from "./example/text-generate-effect-demo-2";
import { GlobeDemo } from "./example/globeTest";

const about = () => {
  return (
    <div className="mt-12 flex flex-col space-y-6 px-4 justify-between items-center mx-auto md:flex-row md:space-y-0 md:space-x-6 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-black z-40 md:mt-0">
      <div>
        <TextGenerateEffectDemo />
      </div>

      <div className="w-full">
        <GlobeDemo />
      </div>
      {/* <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-black z-40" /> */}
    </div>
  );
};

export default about;
