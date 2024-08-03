"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `RAISING DYSLEXIA AWARENESS IN 5 AFRICAN COUNTRIES 
`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
