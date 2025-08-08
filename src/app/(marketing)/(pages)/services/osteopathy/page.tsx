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
  Bone,
  Hand,
  Shield,
  Heart,
  Brain,
  Moon,
  Sparkles,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  RefreshCcw,
  Waves,
  Accessibility,
  HeartPulse,
  Syringe,
  X,
  BicepsFlexedIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/(marketing)/_config/seo.config";
import { Metadata } from "next";
import React from "react";
import { OsteopathyImage, ogImagePath } from "../../../../../../public";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AuroraText } from "@/app/(marketing)/_components/ui/gradient-text";

export default function Component() {
  const treatments = [
    {
      icon: Hand,
      title: "Gentle Articulation",
      description:
        "Using rhythmic and gentle movements to improve joint mobility and reduce stiffness, promoting a greater range of motion.",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: BicepsFlexedIcon,
      title: "Soft Tissue Therapy",
      description:
        "Techniques like massage and stretching to release tension, reduce muscle spasms, and improve blood flow to the affected areas.",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
    {
      icon: Shield,
      title: "Postural Correction",
      description:
        "Assessing and correcting postural imbalances to alleviate strain on the body and prevent future pain and injuries.",
      color: "bg-amber-50 border-amber-200 text-amber-600",
    },
    {
      icon: Bone,
      title: "Visceral Osteopathy",
      description:
        "Gentle, hands-on treatment focusing on the body's internal organs to improve their function and relieve tension.",
      color: "bg-teal-50 border-teal-200 text-teal-600",
    },
    {
      icon: RefreshCcw,
      title: "Cranial Osteopathy",
      description:
        "A subtle and gentle approach that works with the rhythmic movement of the cranial bones to relieve stress and tension.",
      color: "bg-indigo-50 border-indigo-200 text-indigo-600",
    },
    {
      icon: HeartPulse,
      title: "Holistic Health Assessment",
      description:
        "Comprehensive evaluation of your body's structure and function to identify the root cause of your symptoms, not just the symptoms themselves.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Supports Natural Healing",
      description:
        "Stimulates the body’s innate ability to heal itself by improving overall function and reducing mechanical stress.",
      color: "bg-red-50 border-red-200 text-red-600",
    },
    {
      icon: Waves,
      title: "Improves Blood Circulation",
      description:
        "Enhances blood flow, which is crucial for delivering nutrients and oxygen to tissues and removing waste products.",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: Accessibility,
      title: "Enhances Mobility & Flexibility",
      description:
        "Increases the range of motion in joints and muscles, making daily movements easier and more fluid.",
      color: "bg-amber-50 border-amber-200 text-amber-600",
    },
    {
      icon: Moon,
      title: "Promotes Restful Sleep",
      description:
        "By relieving pain and tension, osteopathy helps to improve sleep quality and reduce sleep disturbances.",
      color: "bg-green-50 border-green-200 text-green-600",
    },
    {
      icon: Sparkles,
      title: "Relieves Stress & Tension",
      description:
        "Gentle, hands-on techniques help to calm the nervous system, leading to a profound sense of relaxation.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
    {
      icon: CheckCircle,
      title: "Improves Body Function & Balance",
      description:
        "Restores harmony between the body's systems, leading to better balance, posture, and overall well-being.",
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
                  <Bone className="w-4 h-4 mr-2" />
                  Osteopathy
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Best
                  <AuroraText>
                    <span className="px-2">Osteopathy</span>
                  </AuroraText>
                  in Kathmandu & Bhaktapur
                  <br />
                </h1>
                <p className="text-xl text-gray-600 mb-8  text-justify leading-relaxed">
                  Leading osteopathy clinic in Kathmandu and Bhaktapur
                  specializing in musculoskeletal pain and holistic wellness.
                  Our experienced osteopaths provide personalized treatment
                  plans to restore body function, improve mobility, and promote
                  natural healing across Kathmandu Valley.
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
                    src={OsteopathyImage}
                    alt="Osteopathy musculoskeletal care and natural healing"
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
              Our Osteopathy Treatment Methods
            </h2>
            <p className="text-lg text-gray-600 text-justify  mx-auto">
              Our osteopathy clinic in Kathmandu and Bhaktapur provides a wide
              range of hands-on treatments to address the root causes of pain
              and dysfunction. Through personalized consultations with qualified
              osteopaths, we help patients understand the connection between
              their body's structure and overall health. We use a variety of
              gentle and effective techniques to improve joint mobility, reduce
              muscle tension, and support the body's natural healing processes.
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
              Key Benefits of Osteopathy
            </h2>
            <p className="text-lg text-gray-600  text-justify mx-auto mb-4">
              Osteopathy is a holistic approach to healthcare that focuses on
              the intricate relationship between the body's structure and its
              overall function. By employing a variety of gentle, hands-on
              techniques, osteopathy not only provides relief from pain and
              discomfort but also addresses the underlying causes to promote
              long-term wellness. Experience improved mobility, better
              circulation, and a profound sense of balance and relaxation
              through our personalized osteopathic care.
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
