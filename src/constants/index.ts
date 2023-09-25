import { LiaBedSolid } from "react-icons/lia";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { PiSuitcaseBold } from "react-icons/pi";
import { PiCarProfile } from "react-icons/pi";
import { MdAttractions } from "react-icons/md";
import { BiSolidTaxi } from "react-icons/bi";

export const navItems = [
  {
    label: "Stays",
    link: "/",
    icon: LiaBedSolid,
  },
  {
    label: "Flights",
    link: "/flights",
    icon: MdOutlineFlightTakeoff,
  },
  {
    label: "Flight + Hotel",
    link: "/flight-and-hotel",
    icon: PiSuitcaseBold,
  },
  {
    label: "Car rentals",
    link: "/car-rentals",
    icon: PiCarProfile,
  },
  {
    label: "Attractions",
    link: "/attractions",
    icon: MdAttractions,
  },
  {
    label: "Airport taxis",
    link: "/airport-taxis",
    icon: BiSolidTaxi,
  },
];
