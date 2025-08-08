"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Award } from "lucide-react";
import Image from "next/image";
import { AuroraText } from "../../_components/ui/gradient-text";
import {
  MsNutuPandeyImage,
  MsRassmiDeupalImage,
  MsSunitaDahalImage,
  MrsRitaSuluImage,
  DrRashilaSuwalImage,
} from "../../../../../public";

const teamMembers = [
  {
    name: "Ms. Nitu Pandey",
    location: "Kathmandu",
    nhpcNo: "Phy-322",
    year: "2019",
    title: "Senior Physics Specialist",
    department: "Research & Development",
    image: MsNutuPandeyImage,
  },
  {
    name: "Ms. Sunita Dahal",
    location: "Bhaktapur",
    nhpcNo: "A-2021phy",
    year: "2021",
    title: "Physics Research Associate",
    department: "Applied Physics Division",
    image: MsSunitaDahalImage,
  },
  {
    name: "Dr. Rassmi Deupal",
    location: "Kathmandu",
    nhpcNo: "A757 Phy",
    year: "2020",
    title: "Lead Physics Researcher",
    department: "Advanced Physics Lab",
    image: MsRassmiDeupalImage,
  },
  {
    name: "Dr. Rashila Suwal",
    location: "Lalitpur",
    nhpcNo: "A-2051 PHY",
    year: "2021",
    title: "Principal Physicist",
    department: "Theoretical Physics",
    image: DrRashilaSuwalImage,
  },
  {
    name: "Mrs. Rita Sulu Sayan",
    location: "Pokhara",
    nhpcNo: "C-26",
    year: "2018",
    title: "Physics Consultant",
    department: "Applied Research",
    image: MrsRitaSuluImage,
  },
];

export default function TeamShowcase() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 ">Excellence in Physics Research</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Meet Our Nirvana
              <AuroraText>
                <span className=" px-2">Expert Team</span>
              </AuroraText>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Dedicated professionals advancing the frontiers of physics
              research and innovation at Nepal Hydroelectric Power Company's
              Research Division.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="">
        <div className=" mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.nhpcNo}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group "
              >
                <Card className=" p-0 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={200}
                      className="w-full  object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className=" text-primary font-medium">
                          {member.title}
                        </p>
                      </div>
                      <Badge variant="secondary" className=" ">
                        {member.year}
                      </Badge>
                    </div>

                    <p className="text-gray-600 mb-4">{member.department}</p>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {member.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Award className="w-4 h-4 mr-2" />
                        NHPC No. {member.nhpcNo}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
