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
  Heart,
  Brain,
  Leaf,
  Shield,
  Waves,
  RefreshCcw,
  CheckCircle,
  Sun,
  Dumbbell,
  Flower,
  HeartPulseIcon,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";

import React from "react";
import { LBTherapyImage, ogImagePath } from "../../../../../../public";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Component() {
  const treatments = [
    {
      icon: Sun,
      title: "Asanas (Physical Postures)",
      description:
        "A series of yoga poses designed to improve flexibility, strength, and balance, while stimulating internal organs and glands.",
      color: "bg-orange-50 border-orange-200 text-orange-600",
    },
    {
      icon: Waves,
      title: "Pranayama (Breathing Techniques)",
      description:
        "Controlled breathing exercises to regulate energy, calm the nervous system, and improve respiratory function and mental clarity.",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: HeartPulseIcon,
      title: "Meditation & Mindfulness",
      description:
        "Practices to quiet the mind, reduce stress, and cultivate a sense of inner peace, promoting mental and emotional well-being.",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
    {
      icon: Home,
      title: "Shatkarmas (Cleansing Practices)",
      description:
        "Ancient yogic cleansing techniques to detoxify the body, purify the internal organs, and enhance overall health.",
      color: "bg-teal-50 border-teal-200 text-teal-600",
    },
    {
      icon: Flower,
      title: "Yoga Nidra (Yogic Sleep)",
      description:
        "A deep relaxation practice that guides the mind into a state of conscious sleep, releasing deep-seated stress and tension.",
      color: "bg-indigo-50 border-indigo-200 text-indigo-600",
    },
    {
      icon: RefreshCcw,
      title: "Lifestyle & Diet Counseling",
      description:
        "Guidance on healthy living, nutritional choices, and daily routines to support your yogic practice and overall wellness journey.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Promotes Overall Well-being",
      description:
        "A holistic approach that harmonizes the body, mind, and spirit for a positive state of health and happiness.",
      color: "bg-red-50 border-red-200 text-red-600",
    },
    {
      icon: Leaf,
      title: "Detoxifies & Cleanses the Body",
      description:
        "Specific poses and breathing techniques stimulate internal organs and aid in the natural removal of toxins.",
      color: "bg-green-50 border-green-200 text-green-600",
    },
    {
      icon: CheckCircle,
      title: "Restores Body Function",
      description:
        "Helps to bring balance to the body's disturbed systems, improving digestion, circulation, and hormonal health.",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: Brain,
      title: "Relieves Stress & Tension",
      description:
        "Calms the nervous system and mind, reducing anxiety, mental tension, and emotional distress.",
      color: "bg-amber-50 border-amber-200 text-amber-600",
    },
    {
      icon: Shield,
      title: "Strengthens the Immune System",
      description:
        "Reduces stress hormones and improves lymphatic circulation, boosting the body's natural defense mechanisms.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
    {
      icon: Dumbbell,
      title: "Improves Flexibility & Strength",
      description:
        "Enhances physical fitness through a combination of stretching and muscle-building postures.",
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
                  <HeartPulseIcon className="w-4 h-4 mr-2" />
                  Yogic Therapy
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Best <span className="text-primary">Yogic Therapy</span> in
                  Kathmandu & Bhaktapur
                  <br />
                </h1>
                <p className="text-xl text-gray-600 mb-8  text-justify leading-relaxed">
                  Leading yogic therapy center in Kathmandu and Bhaktapur
                  offering expert programs for holistic wellness. Our certified
                  therapists provide personalized treatment plans using ancient
                  yogic practices to relieve stress, detoxify the body, and
                  restore balance across Kathmandu Valley.
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
                    src={LBTherapyImage}
                    alt="Yogic therapy and holistic wellness"
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
              Our Yogic Therapy Methods
            </h2>
            <p className="text-lg text-gray-600 text-justify  mx-auto">
              Our yogic therapy center in Kathmandu and Bhaktapur specializes in
              using the therapeutic potential of yoga to address a wide range of
              physical and mental health concerns. Through personalized sessions
              with qualified yogic therapists, we guide you through ancient
              practices of asanas, pranayama, and meditation to help you achieve
              a state of profound well-being and inner harmony.
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
              Key Benefits of Yogic Therapy
            </h2>
            <p className="text-lg text-gray-600  text-justify mx-auto mb-4">
              Yogic therapy is a comprehensive system that uses the ancient
              practices of yoga to restore balance and harmony within the body
              and mind. It goes beyond mere physical exercise, addressing the
              root causes of ailments to promote long-lasting health. By
              integrating physical postures, breathing exercises, and meditation
              into a personalized plan, yogic therapy empowers you to take
              control of your health and achieve a state of profound well-being.
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
