"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Hand,
  Dumbbell,
  Stethoscope,
  Brain,
  Accessibility,
  Footprints,
  X,
  CircleArrowRight,
} from "lucide-react";
import { RiLungsLine, RiWheelchairFill } from "@remixicon/react";

import { motion } from "framer-motion";

import React from "react";
import { PhysioTherapyImage } from "../../../../../../public";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AuroraText } from "@/app/(marketing)/_components/ui/gradient-text";

export default function Component() {
  const treatments = [
    {
      icon: Dumbbell,
      title: "Exercise Therapy",
      description:
        "Customized exercise programs to restore strength, flexibility, and endurance, aiding in faster recovery and preventing future injuries.",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: Hand,
      title: "Manual Therapy",
      description:
        "Hands-on techniques like massage, joint mobilization, and manipulation to reduce pain, improve circulation, and relax tense muscles.",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
    {
      icon: Stethoscope,
      title: "Electrotherapy",
      description:
        "Using modalities like TENS, ultrasound, and IFT to alleviate pain, reduce inflammation, and accelerate tissue healing.",
      color: "bg-orange-50 border-orange-200 text-orange-600",
    },
    {
      icon: RiLungsLine,
      title: "Respiratory Physiotherapy",
      description:
        "Specialized techniques to improve lung function, clear airways, and enhance breathing patterns for conditions like asthma and bronchitis.",
      color: "bg-teal-50 border-teal-200 text-teal-600",
    },
    {
      icon: RiWheelchairFill,
      title: "Neurological Rehabilitation",
      description:
        "Targeted therapy for patients recovering from stroke, paralysis, or other neurological conditions to regain function and independence.",
      color: "bg-indigo-50 border-indigo-200 text-indigo-600",
    },
    {
      icon: Footprints,
      title: "Gait and Balance Training",
      description:
        "Exercises and techniques to improve walking patterns, stability, and coordination, reducing the risk of falls and enhancing mobility.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
  ];

  const benefits = [
    {
      icon: X,
      title: "Pain Relief & Muscle Relaxation",
      description:
        "Targeted therapies to reduce pain and release tension in muscles and joints, providing long-lasting comfort.",
      color: "bg-red-50 border-red-200 text-red-600",
    },
    {
      icon: Accessibility,
      title: "Improved Mobility & Flexibility",
      description:
        "Enhances range of motion and joint flexibility, making daily activities easier and more comfortable.",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: Footprints,
      title: "Enhanced Balance & Coordination",
      description:
        "Strengthens core muscles and improves stability, reducing the risk of falls and improving overall balance.",
      color: "bg-amber-50 border-amber-200 text-amber-600",
    },
    {
      icon: CircleArrowRight,
      title: "Faster Recovery After Injury",
      description:
        "Accelerates the healing process for post-surgical recovery, sports injuries, and other physical traumas.",
      color: "bg-green-50 border-green-200 text-green-600",
    },
    {
      icon: Dumbbell,
      title: "Sports Injury Rehabilitation",
      description:
        "Specialized programs for athletes to recover from injuries, improve performance, and prevent future harm.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
    {
      icon: Brain,
      title: "Neurological Rehabilitation",
      description:
        "Helps in the recovery from conditions like stroke and paralysis, restoring motor function and independence.",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-2 md:px-8">
      {/* Hero Section */}
      <section className="relative z-10 ">
        <div className=" mx-auto ">
          <div className=" mx-auto">
            <div className="grid lg:grid-cols-2 gap-y-2 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
                  <Hand className="w-4 h-4 mr-2" />
                  Physiotherapy
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Best
                  <AuroraText>
                    <span className="px-2">Physiotherapy</span>
                  </AuroraText>
                  in Kathmandu & Bhaktapur
                  <br />
                </h1>
                <p className="text-xl text-gray-600 mb-8  text-justify leading-relaxed">
                  Leading physiotherapy center in Kathmandu and Bhaktapur
                  offering expert rehabilitation services. Our experienced
                  physiotherapists provide personalized treatment plans for pain
                  relief, injury recovery, and improved mobility across
                  Kathmandu Valley.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={PhysioTherapyImage}
                    alt="Physiotherapy rehabilitation and natural healing"
                    className="w-full h-[300px] md:h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Treatment Methods Section */}
      <section id="treatments" className="relative z-10 py-8 md:pt-12">
        <div className=" mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Physiotherapy Treatment Methods
            </h2>
            <p className="text-lg text-gray-600 text-justify  mx-auto">
              Our physiotherapy clinic in Kathmandu and Bhaktapur specializes in
              effective rehabilitation and pain management. Through personalized
              consultations with qualified physiotherapists, we help patients
              across Kathmandu Valley recover from injuries, manage chronic
              conditions, and improve their physical well-being. Whether you're
              seeking post-surgical rehabilitation, sports injury recovery, or
              pain relief, our center offers safe and effective solutions near
              you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card
                  className={`h-full border-2 shadow-lg gap-y-0 hover:shadow-xl transition-all duration-300 ${treatment.color}`}
                >
                  <CardHeader className=" ">
                    <div className="w-12   rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <treatment.icon
                        className={cn("w-8 h-8 ", treatment.color)}
                      />
                    </div>
                    <CardTitle className="text-xl  text-gray-900">
                      {treatment.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {treatment.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative z-10 py-8 md:pt-12  ">
        <div className=" mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Key Benefits of Physiotherapy
            </h2>
            <p className="text-lg text-gray-600  text-justify mx-auto mb-4">
              Physiotherapy is a vital healthcare profession that helps
              individuals restore, maintain, and maximize their physical
              strength, function, and movement. By addressing the root causes of
              pain and disability, physiotherapy empowers people to improve
              their quality of life. Our expert physiotherapists use a range of
              evidence-based techniques to help you achieve your health goals,
              whether it's recovering from an injury or managing a chronic
              condition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card
                  className={`h-full border-2  gap-y-0   shadow-lg hover:shadow-xl transition-all duration-300 ${benefit.color}`}
                >
                  <CardHeader className="">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className={cn("w-6 h-6", benefit.color)} />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
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
