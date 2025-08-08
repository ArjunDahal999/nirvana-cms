import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  HeartHandshakeIcon, // For "Friendly Environment" or "Personalized Treatment"
  SparklesIcon, // For "Innovative Approach"
  UsersIcon, // For "Expert Team"
  LeafyGreenIcon, // For "Holistic Well-Being"
  BuildingIcon, // For "Elite Facilities"
  UserCheckIcon, // Another option for "Personalized Treatment Plans" or "Expert Team"
  Sparkles,
  Star,
} from "lucide-react";
import { Ripple } from "../ui/ripple";
import { NirvanaLogo } from "../../../../../public";

export function WhyChooseNirvana() {
  const listConfig = [
    {
      icon: <SparklesIcon />,
      title: "Innovative Approach",
      placeholder: "right",
      description:
        "Seamlessly combining traditional and modern treatments like osteopathy, Ayurvedic, manual therapy, chiropractic, and physiotherapy.",
    },
    {
      icon: <UsersIcon />,
      title: "Expert Team",
      placeholder: "right",
      description:
        "Highly trained professionals dedicated to personalized care with expertise in pain management, physical therapy, and wellness.",
    },
    {
      icon: <LeafyGreenIcon />,
      title: "Holistic Well-Being",
      placeholder: "right",
      description:
        "Treating mind, body, and soul through therapies like osteopathy, yogic therapy, and naturopathy services for overall balance.",
    },
    {
      icon: <BuildingIcon />,
      title: "Elite Facilities",
      placeholder: "left",
      description:
        "State-of-the-art wellness center in Kathmandu designed to promote healing and tranquility for an enhanced therapy experience.",
    },
    {
      icon: <UserCheckIcon />,
      title: "Personalized Treatment Plans",
      placeholder: "left",
      description:
        "Tailored plans for your specific health needs, whether for chronic pain, muscle tension, or improving overall  health.",
    },
    {
      icon: <HeartHandshakeIcon />,
      title: "Very Friendly Environment",
      placeholder: "left",
      description:
        "A comfortable, welcoming, and peaceful atmosphere that breaks away from typical clinical spaces, focusing on your healing.",
    },
  ];

  return (
    <div className="py-12">
      <div className="px-8 flex flex-col items-center mx-auto">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
          {/* Green header gradient */}
          <Star className="w-6 h-6 text-primary" />
          <h2 className=" text-2xl md:text-4xl text-primary text-nowrap font-bold">
            Why Choose Nirvana?
          </h2>
          <Star className=" size-2 text-primary" />
        </div>
        <h2 className="text-xl text-center md:text-4xl font-bold mb-6">
          Experience Holistic Healing and Wellness at Nirvana
        </h2>
        <div className=" flex items-center max-sm:flex-col ">
          <div className="flex flex-col">
            {listConfig.map(
              (item, index) =>
                item.placeholder === "right" && (
                  <Card
                    key={index}
                    className="shadow-none border-none flex flex-col bg-inherit "
                  >
                    <CardContent className="p-4 flex h-[6rem] text-primary  justify-between flex-col items-center">
                      <div className=" px-6 py-6 rounded-full flex bg-primary text-white  items-center justify-center">
                        {item.icon}
                      </div>
                      <h3 className="text-nowrap text-xl mb-1">{item.title}</h3>
                    </CardContent>
                    <CardFooter className="">
                      <p className="  text-center">{item.description}</p>
                    </CardFooter>
                  </Card>
                )
            )}
          </div>
          <div className="relative  size-[26rem]  md:flex hidden  w-full flex-col items-center justify-center  rounded-lg  ">
            <Image
              src={NirvanaLogo}
              alt="Nirvana Physiotherapy and Wellness Center Logo"
              width={160}
              height={160}
              className="object-contain  "
            />
            <Ripple />
          </div>

          <div className=" flex flex-col">
            {listConfig.map(
              (item, index) =>
                item.placeholder === "left" && (
                  <Card
                    key={index}
                    className="shadow-none border-none flex flex-col bg-inherit "
                  >
                    <CardContent className="p-4 flex h-[6rem] text-primary  justify-between flex-col items-center">
                      <div className=" px-6 py-6 rounded-full flex bg-primary text-white  items-center justify-center">
                        {item.icon}
                      </div>
                      <h3 className=" text-nowrap text-xl  mb-1">
                        {item.title}
                      </h3>
                    </CardContent>
                    <CardFooter className="flex-1">
                      <p className=" text-center ">{item.description}</p>
                    </CardFooter>
                  </Card>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
