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
  Heart,
  Brain,
  Shield,
  Waves,
  RefreshCcw,
  Sparkles,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Leaf,
  Droplets,
  Apple,
  HandHeart,
  Flower,
  Home,
  Syringe,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/(marketing)/_config/seo.config";
import { Metadata } from "next";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AyurvedicTherapy } from "../../../../../../public";
import { AuroraText } from "@/app/(marketing)/_components/ui/gradient-text";

export default function Component() {
  const treatments = [
    {
      icon: RefreshCcw,
      title: "Panchakarma (Detoxification)",
      description:
        "A series of five therapeutic procedures designed to cleanse the body of toxins and restore balance to your unique doshas (Vata, Pitta, and Kapha).",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: HandHeart,
      title: "Abhyanga (Herbal Oil Massage)",
      description:
        "A full-body massage using warm herbal oils to nourish the skin, improve circulation, and relax the nervous system.",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
    {
      icon: Droplets,
      title: "Shirodhara (Oil Flow Therapy)",
      description:
        "A deeply relaxing treatment where a continuous stream of warm herbal oil is gently poured on the forehead to calm the mind and relieve stress.",
      color: "bg-orange-50 border-orange-200 text-orange-600",
    },
    {
      icon: Leaf,
      title: "Herbal & Botanical Medicine",
      description:
        "Utilizing a wide range of potent herbs and plant-based remedies to address the root cause of health issues and support natural healing.",
      color: "bg-green-50 border-green-200 text-green-600",
    },
    {
      icon: Apple,
      title: "Dietary & Lifestyle Counseling",
      description:
        "Personalized guidance on diet, daily routines, and lifestyle changes tailored to your dosha constitution to promote long-term health and vitality.",
      color: "bg-indigo-50 border-indigo-200 text-indigo-600",
    },
    {
      icon: Flower,
      title: "Ayurvedic Spa & Beauty Therapies",
      description:
        "Rejuvenating treatments like facials, hair treatments, and body scrubs using natural Ayurvedic ingredients to enhance your skin and hair health.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: "Promotes Overall Well-being",
      description:
        "Ayurvedic therapy aims to create a harmonious balance between mind, body, and spirit, leading to a state of profound health and happiness.",
      color: "bg-red-50 border-red-200 text-red-600",
    },
    {
      icon: RefreshCcw,
      title: "Detoxifies and Cleanses the Body",
      description:
        "Therapies like Panchakarma effectively remove accumulated toxins from your system, improving organ function and overall vitality.",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: Scale,
      title: "Restores Dosha Balance",
      description:
        "Ayurveda identifies your unique body constitution (dosha) and provides targeted treatments to restore its natural equilibrium, preventing disease.",
      color: "bg-amber-50 border-amber-200 text-amber-600",
    },
    {
      icon: Brain,
      title: "Relieves Stress & Mental Tension",
      description:
        "Practices like Shirodhara and therapeutic massage calm the nervous system, reducing anxiety, improving mood, and promoting mental clarity.",
      color: "bg-green-50 border-green-200 text-green-600",
    },
    {
      icon: Shield,
      title: "Strengthens the Immune System",
      description:
        "Ayurvedic treatments and herbal remedies boost your body's natural defense mechanisms, making you more resilient to illnesses and infections.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
    {
      icon: CheckCircle,
      title: "Natural & Holistic Healing",
      description:
        "Focuses on treating the root cause of ailments rather than just the symptoms, providing long-lasting relief and sustainable health.",
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
                  <Flower className="w-4 h-4 mr-2" />
                  Ayurvedic Therapy
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Best{" "}
                  <AuroraText>
                    <span className="px-2">Ayurvedic Therapy</span>
                  </AuroraText>{" "}
                  in Kathmandu & Bhaktapur
                  <br />
                </h1>
                <p className="text-xl text-gray-600 mb-8  text-justify leading-relaxed">
                  Leading Ayurvedic therapy center in Kathmandu and Bhaktapur
                  offering authentic, time-honored treatments for holistic
                  wellness. Our expert practitioners provide personalized care
                  to balance your body’s energies and promote natural, lasting
                  health.
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
                    src={AyurvedicTherapy}
                    alt="Ayurvedic therapy for holistic wellness and natural healing"
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
              Our Ayurvedic Therapy Methods
            </h2>
            <p className="text-lg text-gray-600 text-justify  mx-auto">
              Our Ayurvedic center in Kathmandu and Bhaktapur brings the ancient
              wisdom of Ayurveda to modern life. We provide a full spectrum of
              treatments, from powerful detoxification programs like Panchakarma
              to rejuvenating massages and herbal remedies. Our practitioners
              work with you to create a personalized plan based on your unique
              body constitution (dosha) to restore harmony and vitality.
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
              Key Benefits of Ayurvedic Therapy
            </h2>
            <p className="text-lg text-gray-600  text-justify mx-auto mb-4">
              Ayurveda is more than just a system of medicine; it’s a way of
              life that promotes harmony and longevity. By focusing on the root
              cause of imbalances, Ayurvedic therapies provide a profound path
              to wellness. Our treatments help to cleanse the body, calm the
              mind, and strengthen your natural defenses, allowing you to
              experience a state of sustained health and inner peace.
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
