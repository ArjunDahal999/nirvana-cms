"use client";

import { Button } from "@/components/ui/button";
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
  Brain,
  Waves,
  Sparkles,
  CheckCircle,
  Handshake,
  Dumbbell,
  Bone,
  Lightbulb,
  Scale,
  Pill,
  AlignJustify,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { ChiropracticImage, ogImagePath } from "../../../../../../public";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AuroraText } from "@/app/(marketing)/_components/ui/gradient-text";

export default function Component() {
  const treatments = [
    {
      icon: Bone,
      title: "Spinal Adjustments",
      description:
        "Precise, hands-on spinal manipulation to correct misalignments and restore proper function to the nervous system and musculoskeletal structure.",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: Hand,
      title: "Manual Therapy",
      description:
        "Soft tissue techniques and joint mobilization to relieve muscle tension, reduce spasms, and improve flexibility and range of motion.",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
    {
      icon: Dumbbell,
      title: "Rehabilitation Exercises",
      description:
        "Customized exercise plans to strengthen supporting muscles, improve stability, and prevent the recurrence of injuries or pain.",
      color: "bg-orange-50 border-orange-200 text-orange-600",
    },
    {
      icon: AlignJustify,
      title: "Postural Correction",
      description:
        "Assessment and targeted care to correct postural imbalances, reducing strain on the spine and preventing chronic pain.",
      color: "bg-teal-50 border-teal-200 text-teal-600",
    },
    {
      icon: Handshake,
      title: "Ergonomic & Lifestyle Advice",
      description:
        "Expert guidance on proper ergonomics for work and home, along with lifestyle recommendations to support your long-term spinal health.",
      color: "bg-indigo-50 border-indigo-200 text-indigo-600",
    },
    {
      icon: Waves,
      title: "Scoliosis Management",
      description:
        "Specialized techniques and exercises to help manage and reduce the symptoms of scoliosis, improving posture and overall spinal health.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Stress Reduction",
      description:
        "By relieving physical tension and calming the nervous system, chiropractic care helps to reduce stress and promote a sense of well-being.",
      color: "bg-red-50 border-red-200 text-red-600",
    },
    {
      icon: AlignJustify,
      title: "Improved Posture",
      description:
        "Correcting spinal misalignments helps to restore natural posture, reducing strain on the back and neck from daily activities like sitting at a desk.",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Headache & Migraine Relief",
      description:
        "Chiropractic adjustments can effectively reduce the frequency and severity of headaches and migraines by addressing nerve irritation and muscle tension in the neck and upper back.",
      color: "bg-amber-50 border-amber-200 text-amber-600",
    },
    {
      icon: Scale,
      title: "Improved Balance",
      description:
        "By enhancing nervous system function and spinal alignment, chiropractic care can improve your body's proprioception and overall balance.",
      color: "bg-green-50 border-green-200 text-green-600",
    },
    {
      icon: Dumbbell,
      title: "Enhanced Range of Motion",
      description:
        "Increases flexibility and mobility in your joints and spine, making it easier to perform daily tasks and athletic activities without discomfort.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
    {
      icon: Sparkles,
      title: "Pain Relief & Management",
      description:
        "Offers a safe and effective, non-invasive method for managing chronic pain, including back pain, neck pain, and sciatica, by targeting the root cause.",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
    {
      icon: Waves,
      title: "Reduced Scoliosis Symptoms",
      description:
        "Regular chiropractic care can help manage the symptoms of scoliosis, improving posture and reducing pain associated with the spinal curvature.",
      color: "bg-orange-50 border-orange-200 text-orange-600",
    },
    {
      icon: CheckCircle,
      title: "Enhanced Joint Health",
      description:
        "Improves joint function and reduces inflammation, contributing to long-term joint health and potentially slowing the progression of conditions like osteoarthritis.",
      color: "bg-red-50 border-red-200 text-red-600",
    },
    {
      icon: Pill,
      title: "Reduced Pain Medication Use",
      description:
        "Provides a drug-free alternative to pain management, helping patients reduce or eliminate their reliance on pain medication.",
      color: "bg-indigo-50 border-indigo-200 text-indigo-600",
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
                  <Bone className="w-4 h-4 mr-2" />
                  Chiropractic
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Best{" "}
                  <AuroraText>
                    <span className="px-2">Chiropractic</span>
                  </AuroraText>{" "}
                  in Kathmandu & Bhaktapur
                  <br />
                </h1>
                <p className="text-xl text-gray-600 mb-8  text-justify leading-relaxed">
                  Leading chiropractic clinic in Kathmandu and Bhaktapur for
                  lasting pain relief and improved wellness. Our certified
                  chiropractors use non-invasive, hands-on techniques to correct
                  spinal misalignments and restore your body’s natural function
                  and health.
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
                    src={ChiropracticImage}
                    alt="Chiropractic care for back pain and posture correction"
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
              Our Chiropractic Treatment Methods
            </h2>
            <p className="text-lg text-gray-600 text-justify  mx-auto">
              Our chiropractic clinic in Kathmandu and Bhaktapur offers a
              holistic, patient-centered approach to health. We focus on
              identifying the root cause of your pain and discomfort by
              examining the connection between your spine and nervous system.
              Our skilled chiropractors use a variety of proven techniques to
              provide effective relief and promote your body's natural healing
              abilities.
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
              Key Benefits of Chiropractic Care
            </h2>
            <p className="text-lg text-gray-600  text-justify mx-auto mb-4">
              Chiropractic care offers a non-invasive, drug-free path to
              wellness by focusing on the health of your spine and nervous
              system. It is a powerful way to manage pain, improve physical
              function, and enhance your overall quality of life. Explore the
              multiple benefits of a well-aligned body, from reduced stress and
              headaches to improved posture and joint health.
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
