import { FocusCards } from "../ui/focus-cards";
import {
  firstLawyer,
  secondLawyer,
  thirdLawyer,
  fourthLawyer,
  fifthLawyer,
  sixthLawyer,
} from "../../assets/images";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Lawyer Emmanuel",
      src: firstLawyer,
    },
    {
      title: "Lawyer Emmanuella",
      src: secondLawyer,
    },
    {
      title: "Lawyer Johnson",
      src: thirdLawyer,
    },
    {
      title: "Lawyer Kingston",
      src: fourthLawyer,
    },
    {
      title: "Lawyer Daniel",
      src: fifthLawyer,
    },
    {
      title: "Attorney Franklina",
      src: sixthLawyer,
    },
  ];

  return <FocusCards cards={cards} />;
}
