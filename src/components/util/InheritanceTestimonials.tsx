"use client";

import { Heading } from "@radix-ui/themes";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { icons } from "../../assets/icons";

export function InheritanceTestimonials() {
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
          WHAT OUR INHERITANCE DISPUTES CLIENTS HAVE TO SAY
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
      "Dealing with an inheritance dispute can feel like living through the best of times and the worst of times. Fortuna Legal Services brought wisdom where there was confusion and belief where there was doubt. They were the light in what felt like a season of darkness, guiding me through the complexities of my case with clarity and expertise.",
    name: "Charles D.",
    title: "Client in a Contentious Inheritance Case",
  },
  {
    quote:
      "To contest or not to contest, that was the question. I faced the slings and arrows of a family dispute over inheritance, but Fortuna Legal Services stood by me through it all. They helped me take a stand and fight for my rightful share, offering not only legal expertise but also emotional support during such a trying time.",
    name: "William S.",
    title: "Client in a Will Contest",
  },
  {
    quote:
      "What seemed straightforward turned out to be a dream within a dream—an inheritance battle that revealed hidden complexities. Fortuna Legal Services uncovered the truth and ensured I wasn’t left with an illusion of fairness but a real resolution. Their attention to detail made all the difference.",
    name: "Edgar P.",
    title: "Client in a Disputed Trust Case",
  },
  {
    quote:
      "It is a truth universally acknowledged that when significant wealth is at stake, disputes can arise. Fortuna Legal Services provided invaluable counsel in resolving a complicated inheritance matter, ensuring that my family's future remained secure and fair. Their guidance was indispensable.",
    name: "Jane A.",
    title: "Client in a Family Estate Dispute",
  },
  {
    quote:
      "I felt adrift in a sea of legal issues after my family’s inheritance became a matter of contention. Fortuna Legal Services navigated the storm, taking control of a complex situation that felt overwhelming to me. They gave me direction, clarity, and ultimately a fair resolution in the face of uncertainty.",
    name: "Herman M.",
    title: "Client in a Cross-Jurisdictional Inheritance Case",
  },
];

