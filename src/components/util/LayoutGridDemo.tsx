"use client";
import { LayoutGrid } from "../ui/layout-grid";
import {
  trust,
  will,
  estate,
  successionPlanning,
  inheritance,
} from "../../assets/images";

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Succession Planning
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Planning for the future is vital to securing your family’s legacy. We
        offer strategic succession planning services designed to ensure a smooth
        transfer of assets and responsibilities to the next generation. Our
        approach is tailored to meet your unique circumstances and long-term
        goals.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Inheritance Disputes
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Inheritance disputes can cause emotional strain and financial
        uncertainty. Our legal professionals specialize in resolving disputes
        over wills, trusts, and estates. We work tirelessly to ensure a fair and
        equitable outcome, protecting your rights and interests during these
        challenging times.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Will Drafting and Review
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Creating a will is an essential step in safeguarding your legacy. Our
        experienced attorneys assist in drafting and reviewing legally sound
        wills that reflect your wishes and ensure that your loved ones are
        protected. We guide you through every detail, making sure your estate is
        handled exactly as you intend.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Estate Administration
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Navigating the probate process can be complex and overwhelming. Our team
        provides comprehensive estate administration services, handling
        everything from inventorying assets to settling debts and distributing
        inheritances. We ensure that the estate is managed efficiently, with
        transparency and diligence.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Trust Administration
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Trusts provide a flexible and secure way to manage assets for future
        generations. Our trust administration services ensure that the terms of
        the trust are faithfully carried out, with the beneficiaries&apos;
        interests safeguarded. We handle all aspects of trust management,
        allowing you peace of mind.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: successionPlanning,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: inheritance,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: will,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: estate,
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail: trust,
  },
];
