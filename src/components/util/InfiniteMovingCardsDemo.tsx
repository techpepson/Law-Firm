"use client";

import { Heading } from "@radix-ui/themes";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { icons } from "../../assets/icons";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden gap-5">
      <Heading>
        <span className="oleo-script-regular">Testimonials</span>
      </Heading>
      <div className="flex gap-3">
        <Heading>{icons.star}</Heading>
        <Heading>{icons.star}</Heading>
        <Heading>{icons.star}</Heading>
        <Heading>{icons.star}</Heading>
        <Heading>{icons.star}</Heading>
      </div>
      <Heading className="text-center items-center">
        <span className="elsie-swash-caps-regular">
          WHAT OUR CLIENTS HAVE TO SAY
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
      "Navigating through the most challenging times in my life, I turned to Fortuna Legal Services. They provided wisdom when I felt lost, hope when all seemed bleak, and clarity amidst confusion. Their expertise turned my despair into relief and ensured my rights were protected at every step.",
    name: "Charles D.",
    title: "Client in a Complex Civil Litigation Case",
  },
  {
    quote:
      "When faced with an overwhelming legal challenge, I asked myself if I should endure the struggle alone or seek professional help. Choosing Fortuna Legal Services was the best decision I made. They took on my case with unwavering commitment, fighting every legal battle on my behalf. Their dedication gave me peace of mind.",
    name: "William S.",
    title: "Client in a Personal Injury Case",
  },
  {
    quote:
      "In times when everything felt uncertain, Fortuna Legal Services reminded me that not everything is as it seems. Their thorough approach and attention to detail ensured that no aspect of my case was overlooked, allowing me to rest easy knowing I was in good hands.",
    name: "Edgar P.",
    title: "Client in a Business Dispute",
  },
  {
    quote:
      "It is a truth universally acknowledged that when you are in possession of significant assets, you need the best legal counsel. Fortuna Legal Services provided me with exceptional advice on estate planning and financial protection, ensuring my future was secure.",
    name: "Jane A.",
    title: "Client in an Estate Planning Case",
  },
  {
    quote:
      "When I had little hope left and faced turbulent legal challenges, Fortuna Legal Services stepped in. They navigated the complexities of my case with precision and ensured that my interests were protected throughout. I couldn’t have asked for a more dedicated legal team.",
    name: "Herman M.",
    title: "Client in a Maritime Law Case",
  },
];
