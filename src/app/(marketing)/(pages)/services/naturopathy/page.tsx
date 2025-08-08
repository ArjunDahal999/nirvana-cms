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
  Leaf,
  Heart,
  Shield,
  Droplets,
  Apple,
  HandHeart,
  Brain,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/(marketing)/_config/seo.config";
import { Metadata } from "next";
import React from "react";
import { NaturopathyImage, ogImagePath } from "../../../../../../public";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AuroraText } from "@/app/(marketing)/_components/ui/gradient-text";

export default function Component() {
  const treatments = [
    {
      icon: Leaf,
      title: "Herbal & Botanical Medicine",
      description:
        "Using plant-based remedies to support and stimulate the body's natural healing processes for various conditions.",
      color: "bg-green-50 border-green-200 text-green-600",
    },
    {
      icon: Droplets,
      title: "Hydrotherapy",
      description:
        "Therapeutic use of water in different forms (baths, compresses, packs) to improve circulation and reduce inflammation.",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: Apple,
      title: "Nutritional Therapy",
      description:
        "Personalized dietary plans and supplements to correct deficiencies and optimize bodily functions.",
      color: "bg-orange-50 border-orange-200 text-orange-600",
    },
    {
      icon: HandHeart,
      title: "Physical & Manipulative Therapy",
      description:
        "Techniques like massage and acupressure to relieve pain, improve mobility, and promote relaxation.",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
    {
      icon: Brain,
      title: "Lifestyle & Stress Management",
      description:
        "Counseling and education to help you adopt healthier habits, manage stress, and achieve mind-body balance.",
      color: "bg-indigo-50 border-indigo-200 text-indigo-600",
    },
    {
      icon: Sparkles,
      title: "Detoxification & Fasting",
      description:
        "Supervised detox programs and therapeutic fasting to cleanse the body and revitalize energy.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Supports Self-Healing",
      description:
        "Stimulates and assists the body’s innate ability to heal itself naturally.",
      color: "bg-red-50 border-red-200 text-red-600",
    },
    {
      icon: CheckCircle,
      title: "Personalized Care",
      description:
        "Tailored treatment plans that address your unique health needs and goals.",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: Shield,
      title: "Strengthens Immunity",
      description:
        "Boosts your immune system naturally to prevent illness and improve resilience.",
      color: "bg-amber-50 border-amber-200 text-amber-600",
    },
    {
      icon: Leaf,
      title: "Safe & Non-Invasive",
      description:
        "Uses gentle, natural therapies that are non-invasive and have minimal side effects.",
      color: "bg-green-50 border-green-200 text-green-600",
    },
    {
      icon: Sparkles,
      title: "Aids Detoxification",
      description:
        "Helps the body's natural processes of cleansing and removing toxins.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
    {
      icon: Brain,
      title: "Mind-Body Connection",
      description:
        "Enhances the link between mental and physical health for comprehensive wellness.",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-2 md:px-8  ">
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
                  <Leaf className="w-4 h-4 mr-2" />
                  Naturopathy
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Best{" "}
                  <AuroraText>
                    <span className="px-2">Naturopathy</span>
                  </AuroraText>{" "}
                  in Kathmandu & Bhaktapur
                  <br />
                </h1>
                <p className="text-xl text-gray-600 mb-8  text-justify leading-relaxed">
                  Leading naturopathy center in Kathmandu and Bhaktapur offering
                  expert natural healing treatments. Our experienced
                  naturopathic doctors provide personalized holistic wellness
                  solutions using herbal medicine, detoxification, and natural
                  therapy methods across Kathmandu Valley.
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
                    src={NaturopathyImage}
                    alt="Naturopathy wellness and natural healing"
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
              Our Naturopathy Treatment Methods
            </h2>
            <p className="text-lg text-gray-600 text-justify  mx-auto">
              Our naturopathy clinic in Kathmandu and Bhaktapur specializes in
              natural healing and holistic wellness treatments. Through
              personalized consultations with qualified naturopathic doctors, we
              help patients across Kathmandu Valley understand their unique
              health needs. Whether you're seeking natural therapy for chronic
              conditions, stress relief, or preventive wellness care, our
              naturopathy center offers safe, effective, and natural treatment
              solutions near you.
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
              Benefits of Naturopathy
            </h2>
            <p className="text-lg text-gray-600  text-justify mx-auto mb-4">
              Naturopathy is a holistic approach to wellness that offers a
              multitude of benefits, focusing on the root causes of health
              issues rather than just the symptoms. By integrating natural
              therapies, lifestyle changes, and personalized care, naturopathy
              empowers individuals to achieve optimal health and long-term
              well-being. Experience improved energy, enhanced immunity, and a
              balanced mind-body connection through safe, non-invasive
              treatments tailored to your unique needs.
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
