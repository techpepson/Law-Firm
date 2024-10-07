"use client";

import { Heading } from "@radix-ui/themes";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { icons } from "../../assets/icons";

export function SuccessionPlanningTestimonial() {
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
          WHAT OUR SUCCESSION PLANNING CLIENTS HAVE TO SAY
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
      "Succession planning can feel like the best of times and the worst of times—filled with hope for the future but also challenging decisions. Fortuna Legal Services provided the wisdom and expertise I needed to make confident choices, guiding me through every step. Their careful planning turned what could have been a season of uncertainty into one of clarity and security for my family.",
    name: "Charles D.",
    title: "Client in Business Succession Planning",
  },
  {
    quote:
      "To plan or not to plan—when it comes to succession, that is the question. Fortuna Legal Services helped me navigate the 'slings and arrows' of my legacy planning. Their expert guidance allowed me to take control of my future and secure my family's financial stability. Thanks to their dedication, I found peace of mind knowing my affairs were in the best hands.",
    name: "William S.",
    title: "Client in Family Business Transition",
  },
  {
    quote:
      "In the world of succession planning, things are often not what they seem. Fortuna Legal Services ensured that I wasn't left dreaming of a smooth transition but experiencing one. They helped structure my estate and business with precision, securing my family's future and turning my vision into reality.",
    name: "Edgar P.",
    title: "Client in Estate Succession",
  },
  {
    quote:
      "It is a truth universally acknowledged that anyone in possession of significant assets needs proper succession planning. Fortuna Legal Services provided unparalleled support in helping me create a comprehensive plan to protect my wealth and ensure that my wishes will be honored. Their expertise was invaluable.",
    name: "Jane A.",
    title: "Client in High-Net-Worth Succession Planning",
  },
  {
    quote:
      "When I had no clear direction for my succession plan, Fortuna Legal Services stepped in and guided me through uncharted waters. Their thorough knowledge of estate and succession laws ensured that my affairs were expertly handled, giving me the confidence to face the future with certainty.",
    name: "Herman M.",
    title: "Client in Cross-Border Succession Planning",
  },
];
