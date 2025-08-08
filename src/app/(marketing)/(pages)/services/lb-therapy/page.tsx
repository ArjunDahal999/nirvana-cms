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
  Shield,
  Waves,
  Lightbulb,
  Moon,
  Hand,
  Bolt,
  Scale,
  Sun,
  Dumbbell,
} from "lucide-react";
import { motion } from "framer-motion";

import React from "react";
import { LBTherapyImage } from "../../../../../../public";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AuroraText } from "@/app/(marketing)/_components/ui/gradient-text";

export default function Component() {
  const treatments = [
    {
      icon: Hand,
      title: "Targeted Manual Therapy",
      description:
        "Specialized hands-on techniques to address specific areas of pain and muscle tension, promoting immediate relief and relaxation.",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: Sun,
      title: "Energy & Vitality Sessions",
      description:
        "Practices designed to unblock energy pathways and stimulate the body's natural vitality, leaving you feeling refreshed and invigorated.",
      color: "bg-orange-50 border-orange-200 text-orange-600",
    },
    {
      icon: Brain,
      title: "Mind-Body Relaxation",
      description:
        "Guided relaxation and breathing exercises to calm the nervous system, reduce mental chatter, and foster a sense of inner peace.",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
    {
      icon: Moon,
      title: "Sleep Enhancement Techniques",
      description:
        "Customized therapeutic approaches to prepare the body and mind for rest, promoting a deeper and more restorative sleep cycle.",
      color: "bg-teal-50 border-teal-200 text-teal-600",
    },
    {
      icon: Dumbbell,
      title: "Flexibility & Mobility Support",
      description:
        "Gentle movements and stretching to improve range of motion, reduce stiffness, and enhance overall physical ease.",
      color: "bg-indigo-50 border-indigo-200 text-indigo-600",
    },
    {
      icon: Scale,
      title: "Emotional Balance",
      description:
        "Holistic techniques to help manage emotional stress and promote a feeling of calm and stability.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
  ];

  const benefits = [
    {
      icon: Waves,
      title: "Reduces Stress & Anxiety",
      description:
        "Helps you feel calm, relaxed, and peaceful by soothing the nervous system and easing mental tension.",
      color: "bg-red-50 border-red-200 text-red-600",
    },
    {
      icon: Heart,
      title: "Improves Blood Circulation",
      description:
        "Increases oxygen flow and nutrient delivery throughout the body, leading to better energy and overall health.",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: Bolt,
      title: "Boosts Energy Levels",
      description:
        "Makes you feel more active, refreshed, and revitalized by stimulating your body's natural energy centers.",
      color: "bg-amber-50 border-amber-200 text-amber-600",
    },
    {
      icon: Hand,
      title: "Relieves Body Pain & Muscle Tension",
      description:
        "Soothes sore muscles, reduces body aches, and provides lasting relief from physical discomfort.",
      color: "bg-green-50 border-green-200 text-green-600",
    },
    {
      icon: Lightbulb,
      title: "Improves Focus & Mental Clarity",
      description:
        "Helps you think clearly, concentrate better, and feel more emotionally balanced and centered.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
    {
      icon: Moon,
      title: "Promotes Better Sleep",
      description:
        "Relaxes the body and mind deeply, paving the way for a peaceful and restorative good night’s sleep.",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
    {
      icon: Shield,
      title: "Strengthens the Immune System",
      description:
        "Helps the body stay strong, fight off illness, and recover faster by reducing stress and improving circulation.",
      color: "bg-orange-50 border-orange-200 text-orange-600",
    },
    {
      icon: Scale,
      title: "Balances Mind & Body",
      description:
        "Connects physical and emotional health, leading to a state of complete and integrated well-being.",
      color: "bg-rose-50 border-rose-200 text-rose-600",
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
                  L&B Therapy
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Best{" "}
                  <AuroraText>
                    <span className="px-2">L&amp;B Therapy</span>
                  </AuroraText>{" "}
                  in Kathmandu &amp; Bhaktapur
                  <br />
                </h1>
                <p className="text-xl text-gray-600 mb-8  text-justify leading-relaxed">
                  Leading L&B Therapy center in Kathmandu and Bhaktapur offering
                  expert treatments for stress, pain relief, and overall
                  wellness. Our experienced therapists provide personalized
                  sessions to help you achieve mind-body balance and feel your
                  best.
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
                    alt="L&B Therapy for stress relief and pain management"
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
              Our L&B Therapy Methods
            </h2>
            <p className="text-lg text-gray-600 text-justify  mx-auto">
              Our L&B Therapy center in Kathmandu and Bhaktapur provides a
              unique blend of therapeutic techniques to address both physical
              and emotional well-being. Our expert therapists use a personalized
              approach, combining hands-on methods with guided relaxation to
              help you reduce pain, relieve stress, and feel more energetic and
              balanced.
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
              Key Benefits of L&B Therapy
            </h2>
            <p className="text-lg text-gray-600  text-justify mx-auto mb-4">
              L&B Therapy is a unique and effective therapeutic approach that
              focuses on restoring harmony between your body and mind. By
              integrating various techniques, it provides a powerful way to
              reduce stress, relieve pain, and boost your overall well-being.
              Experience a profound sense of calm and vitality, improved sleep,
              and a stronger immune system through our personalized sessions.
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
