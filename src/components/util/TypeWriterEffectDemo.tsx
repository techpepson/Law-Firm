"use client";
import { aboutPageStyles } from "../../styles/utilityStyles";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Our",
    },
    {
      text: "Goal",
    },
    {
      text: "is",
    },
    {
      text: "To",
    },
    {
      text: "Provide",
    },
    {
      text: "Concise",
    },
    {
      text: "and",
    },
    {
      text: "Effective",
    },
    {
      text: "Legal",
    },
    {
      text: "Services",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center   ">
      <TypewriterEffectSmooth words={words} />
      <span
        className={`${aboutPageStyles.textStyles} text-[20px] max-md:text-[17px]`}
      >
        At Fortuna Legal Services, we understand that legal matters can often be
        complex and overwhelming. Our mission is to demystify this process by
        providing clear, concise, and effective legal solutions that empower our
        clients to make informed decisions. Whether you are an individual, a
        small business, or a large corporation, we focus on delivering tailored
        legal services that address your unique needs. We believe that concise
        communication is key to success. By stripping away unnecessary jargon
        and getting straight to the heart of the matter, we ensure that our
        clients understand every aspect of their case. This allows us to offer
        practical legal advice that is not only easy to comprehend but also
        actionable and result-driven. Our team of highly experienced attorneys
        is dedicated to offering effective legal strategies designed to resolve
        disputes swiftly and efficiently. From contract negotiations to
        litigation, our goal is to minimize complications while maximizing
        positive outcomes. We pride ourselves on being a partner to our clients,
        guiding them through legal challenges with confidence and clarity. In
        short, our primary focus is to combine expertise with simplicity,
        ensuring that every client receives a streamlined, efficient legal
        service that meets their objectives without unnecessary delay or
        confusion. At Fortuna, your legal needs are handled with care,
        precision, and a commitment to delivering optimal results.
      </span>
    </div>
  );
}
