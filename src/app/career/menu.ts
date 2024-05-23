import { AiFillThunderbolt } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";

import { IconType } from "react-icons";

interface Link {
  id: number;
  title: string;
  text: string;
  icon: IconType;
}

export const card_list: Link[] = [
  {
    id: 1,
    icon: AiFillThunderbolt,
    title: "Lasting Service",
    text: "By approaching every task with careful intentionality, we work to provide a meaningful and lasting service for our clients. ",
  },
  {
    id: 2,
    icon: FaThumbsUp,
    title: "Team Work",
    text: "Work is best when it is enjoyed. We have team activities to ensure a healthy and effective work environment for everyone  ",
  },
  {
    id: 3,
    icon: FaPaperPlane,
    title: "Inclusive Culture",
    text: "It is important that all team members at all organisational levels feel valued no matter their experiences or background.",
  },
];

export const jobs = [
  {
    job: "Staff managment",
    route: "/career",
  },
  {
    job: "project managment",
    route: "/career",
  },
  {
    job: "senior developer",
    route: "/career",
  },
  {
    job: "system analyst",
    route: "/career",
  },
];
