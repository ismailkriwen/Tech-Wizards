import { type IconType } from "react-icons";
import { MdOutlineWorkspacePremium } from "react-icons/md";

type CallToAction = {
  text: string;
  href: string;
};

type PlansProps = {
  icon?: IconType;
  name: string;
  features: string[];
  unavailable?: string[];
  price: number;
  cta?: CallToAction;
}[];

export const PLANS: PlansProps = [
  {
    name: "Basic",
    features: ["Access to basic web development lessons."],
    unavailable: [
      "Acess to framework lessons.",
      "Access to code sources.",
      "Contanct for questions.",
      "Coding Challenges.",
    ],
    price: 0,
  },
  {
    icon: MdOutlineWorkspacePremium,
    name: "Premium",
    features: [
      "Access to basic web development lessons.",
      "Acess to framework lessons.",
      "Access to code sources.",
      "Contanct for questions.",
      "Coding Challenges.",
    ],
    cta: {
      text: "Upgrade to Premium",
      href: "/upgrade",
    },
    price: 15.99,
  },
];

export const FEATURES = [
  {
    heading: "Hands-On Learning",
    content:
      "Dive into the world of coding with our hands-on learning approach. We believe in learning by doing, and our curated projects allow you to apply your skills in real-world scenarios.",
  },
  {
    heading: "Coding Challenges",
    content:
      "Elevate your coding prowess with our challenging exercises. Our platform provides a space for you to test your skills, solve real coding problems, and refine your abilities through engaging challenges.",
  },
  {
    heading: "Innovative Learning Tools",
    content:
      "Immerse yourself in our cutting-edge learning tools designed to make your journey enjoyable and effective. From gamified learning experiences to interactive webinars, we've got it all.",
  },
];
