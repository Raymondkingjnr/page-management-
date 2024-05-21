import { IconType } from "react-icons";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { PiStopCircleLight } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";

interface Link {
  text: string;
  icon: IconType;
}

export const quick_links: Link[] = [
  {
    text: "Fill a complaint",
    icon: IoMdCheckmark,
  },
  {
    text: "FAQ",
    icon: RxCross2,
  },
  {
    text: "Privacy Policy",
    icon: PiStopCircleLight,
  },
];
export const reach_us_link: Link[] = [
  {
    text: "No 9, Alhaji Bashorun Street Off Norman Willams Street, Off Awolowo raod, Ikoyi, Lagos Nigeria.",
    icon: IoHomeOutline,
  },
  {
    text: "info@pageml.com",
    icon: AiOutlineMail,
  },
  {
    text: "+234 818 490 6291, +234 201 634 4079",
    icon: BsTelephoneForward,
  },
];
