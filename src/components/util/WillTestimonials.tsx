"use client";

import { Heading } from "@radix-ui/themes";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { icons } from "../../assets/icons";

export function WillTestimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden gap-5">
      <Heading>
        <span className="elsie-swash-caps-regular">Testimonials</span>
      </Heading>
      <div className="flex gap-3">
        <Heading>{icons.star}</Heading>
        <Heading>{icons.star}</Heading>
        <Heading>{icons.star}</Heading>
        <Heading>{icons.star}</Heading>
        <Heading>{icons.star}</Heading>
      </div>
      <Heading className="text-center items-center">
        <span className="oleo-script-regular">
          {" "}
          WHAT OUR WILL DRAFTING CLIENTS HAVE TO SAY
        </span>
      </Heading>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Drafting a will can feel like the best of times and the worst of times—filled with hope for the future but also challenging decisions. Fortuna Legal Services brought clarity, wisdom, and peace of mind to the process. Their thorough review ensured that my wishes were perfectly aligned with the law, turning what could have been a confusing experience into one of certainty and security.",
    name: "Charles D.",
    title: "Client for Will Drafting",
  },
  {
    quote:
      "To draft or not to draft—that was the question. I was overwhelmed by the prospect of getting my affairs in order, but Fortuna Legal Services made the process seamless. Their expertise helped me address every detail, ensuring that my family will be protected when the time comes. I couldn’t have made a better choice.",
    name: "William S.",
    title: "Client for Will Review and Amendment",
  },
  {
    quote:
      "When it comes to wills, what we see or seem can be complicated. Fortuna Legal Services turned my vision into reality, offering detailed advice to ensure my estate plan covered every possibility. Their careful drafting made sure my legacy was secure, turning a once vague dream into a solid plan for the future.",
    name: "Edgar P.",
    title: "Client for Estate Will Preparation",
  },
  {
    quote:
      "It is a truth universally acknowledged that anyone in possession of a fortune needs a well-drafted will. Fortuna Legal Services helped me create a thorough and legally sound document, ensuring that my loved ones will be cared for as I intend. Their expertise was absolutely invaluable.",
    name: "Jane A.",
    title: "Client for High-Net-Worth Will Drafting",
  },
  {
    quote:
      "I had no clear path for how to set up my will, but Fortuna Legal Services guided me through every step. Their in-depth knowledge of estate planning laws ensured that my final wishes were expertly documented and that my family would be protected when the time comes. I couldn’t have asked for better service.",
    name: "Herman M.",
    title: "Client for Comprehensive Will Review",
  },
];
