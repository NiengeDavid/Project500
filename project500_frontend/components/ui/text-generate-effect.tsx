"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-slate-500 lg:text-white opacity-90"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="px-2 flex flex-col space-y-3 justify-center items-center">
        <h1 className="px-2 text-black text-start text-xl text-nowrap font-bold leading-normal w-full md:text-start">
          ABOUT PROJECT 500 &#10509;
        </h1>
        <div className="px-2 dark:text-white text-start text-slate-300 text-xl leading-snug tracking-normal md:text-start">
          {renderWords()}
        </div>

        <p className="px-2 max-w-2xl text-lg text-black font-light leading-normal text-start md:text-start">
          Dyslexia Project 500 aims to reach primary school children across
          Africa, starting with pilot programs in Ghana, Rwanda, Kenya,
          Cameroon, and Nigeria. Our goal is to raise dyslexia awareness among
          children, highlighting not only the challenges but also the strengths
          associated with dyslexia. By doing so, we seek to create a supportive
          environment for neurodivergent children with dyslexia.
        </p>
      </div>
    </div>
  );
};
