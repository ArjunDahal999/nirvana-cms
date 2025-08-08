"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Zap,
  Shield,
  Target,
  Users,
  Clock,
  Brain,
  Moon,
  Activity,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Smile,
  Leaf,
  Award,
  RefreshCw,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AuroraText } from "../../_components/ui/gradient-text";

const benefits = [
  {
    id: 1,
    title: "Pain Relief",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    description:
      "Advanced pain management through targeted therapies and evidence-based techniques.",
    details: [
      "Reduces chronic pain by up to 80%",
      "Non-invasive treatment options",
      "Addresses root causes, not just symptoms",
      "Specialized techniques for different pain types",
    ],
    expandedContent:
      "Our comprehensive pain relief approach combines manual therapy, advanced modalities, and personalized treatment plans. We utilize cutting-edge techniques including dry needling, cupping therapy, and neuromuscular re-education to target pain at its source. Whether you're dealing with acute injury pain or chronic conditions, our evidence-based methods provide lasting relief while promoting natural healing.",
    successRate: 92,
    treatmentTime: "2-8 weeks",
    category: "Core Treatment",
  },
  {
    id: 2,
    title: "Improved Mobility",
    icon: Activity,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    description:
      "Restore freedom of movement and enhance functional abilities through specialized mobility programs.",
    details: [
      "Increases range of motion by 60-90%",
      "Joint mobilization techniques",
      "Functional movement training",
      "Adaptive equipment guidance",
    ],
    expandedContent:
      "Our mobility enhancement programs focus on restoring natural movement patterns through joint mobilization, soft tissue techniques, and progressive exercise therapy. We address restrictions caused by injury, surgery, or chronic conditions using manual therapy, therapeutic exercises, and movement re-education to help you regain full functional capacity.",
    successRate: 88,
    treatmentTime: "4-12 weeks",
    category: "Functional Recovery",
  },
  {
    id: 3,
    title: "Enhanced Physical Function",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    description:
      "Comprehensive strength, flexibility, and coordination improvement for optimal performance.",
    details: [
      "Strength gains of 40-70%",
      "Improved balance and coordination",
      "Sport-specific training programs",
      "Functional capacity evaluation",
    ],
    expandedContent:
      "Our performance enhancement approach combines strength training, flexibility work, and coordination exercises tailored to your specific goals. Whether you're an athlete looking to improve performance or someone wanting to excel in daily activities, we develop comprehensive programs that build functional strength, enhance flexibility, and improve overall physical capacity.",
    successRate: 85,
    treatmentTime: "6-16 weeks",
    category: "Performance Enhancement",
  },
  {
    id: 4,
    title: "Holistic Well-being",
    icon: Leaf,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
    description:
      "Mind-body wellness approach addressing mental, emotional, and physical health integration.",
    details: [
      "Stress reduction techniques",
      "Mindfulness integration",
      "Emotional wellness support",
      "Lifestyle counseling",
    ],
    expandedContent:
      "We believe in treating the whole person, not just the condition. Our holistic approach integrates physical therapy with stress management, mindfulness techniques, and emotional wellness support. We address the mind-body connection through relaxation techniques, breathing exercises, and lifestyle modifications that promote overall well-being and inner harmony.",
    successRate: 90,
    treatmentTime: "Ongoing",
    category: "Wellness Integration",
  },
  {
    id: 5,
    title: "Personalized Care",
    icon: Users,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    description:
      "Individualized treatment plans tailored to your unique needs, goals, and lifestyle.",
    details: [
      "One-on-one assessment",
      "Customized treatment protocols",
      "Regular progress monitoring",
      "Flexible scheduling options",
    ],
    expandedContent:
      "Every patient receives a comprehensive evaluation and personalized treatment plan designed specifically for their condition, goals, and lifestyle. Our expert team conducts thorough assessments, considers your medical history, and creates individualized protocols that evolve with your progress, ensuring optimal outcomes and patient satisfaction.",
    successRate: 94,
    treatmentTime: "Varies",
    category: "Patient-Centered Care",
  },
  {
    id: 6,
    title: "Faster Recovery",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    description:
      "Accelerated healing through advanced techniques and evidence-based treatment modalities.",
    details: [
      "50% faster recovery times",
      "Advanced healing modalities",
      "Optimized treatment protocols",
      "Progress tracking technology",
    ],
    expandedContent:
      "Our advanced treatment modalities and evidence-based protocols are designed to accelerate your body's natural healing processes. We utilize cutting-edge technologies including ultrasound therapy, electrical stimulation, and laser therapy, combined with manual techniques to optimize recovery times and promote long-lasting results.",
    successRate: 87,
    treatmentTime: "Reduced by 50%",
    category: "Recovery Optimization",
  },
  {
    id: 7,
    title: "Prevention & Longevity",
    icon: Shield,
    color: "from-teal-500 to-green-500",
    bgColor: "bg-teal-50",
    description:
      "Proactive health strategies and injury prevention programs for long-term wellness.",
    details: [
      "Injury prevention education",
      "Ergonomic assessments",
      "Lifestyle modification guidance",
      "Long-term health planning",
    ],
    expandedContent:
      "Beyond treating current conditions, we focus on preventing future problems through comprehensive education, ergonomic assessments, and lifestyle modifications. Our prevention programs include movement screening, workplace assessments, and personalized exercise routines designed to maintain optimal health and prevent re-injury.",
    successRate: 91,
    treatmentTime: "Lifelong",
    category: "Preventive Care",
  },
  {
    id: 8,
    title: "Stress Reduction",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    description:
      "Mental clarity and emotional balance through therapeutic relaxation and stress management.",
    details: [
      "Reduces stress levels by 70%",
      "Relaxation techniques",
      "Breathing exercises",
      "Mental clarity improvement",
    ],
    expandedContent:
      "Our stress reduction programs combine physical therapy with relaxation techniques, breathing exercises, and mindfulness practices. We help you develop coping strategies, improve mental clarity, and achieve emotional balance through therapeutic interventions that address both physical tension and mental stress.",
    successRate: 89,
    treatmentTime: "4-8 weeks",
    category: "Mental Wellness",
  },
  {
    id: 9,
    title: "Boosted Energy Levels",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    description:
      "Enhanced vitality through improved circulation, pain reduction, and optimized body function.",
    details: [
      "Improves blood circulation",
      "Reduces fatigue by 60%",
      "Enhances metabolic function",
      "Increases daily stamina",
    ],
    expandedContent:
      "Our energy enhancement treatments focus on improving circulation, reducing pain-related fatigue, and optimizing your body's natural energy systems. Through targeted therapies, exercise programs, and lifestyle modifications, we help restore your natural vitality and maintain sustained energy levels throughout the day.",
    successRate: 86,
    treatmentTime: "3-6 weeks",
    category: "Vitality Enhancement",
  },
  {
    id: 10,
    title: "Improved Sleep Quality",
    icon: Moon,
    color: "from-slate-500 to-gray-500",
    bgColor: "bg-slate-50",
    description:
      "Better rest through spinal alignment, muscle relaxation, and pain reduction techniques.",
    details: [
      "Improves sleep quality by 75%",
      "Reduces sleep disruptions",
      "Spinal alignment therapy",
      "Muscle tension relief",
    ],
    expandedContent:
      "Quality sleep is essential for healing and overall health. Our sleep improvement programs address physical factors that disrupt rest, including spinal misalignment, muscle tension, and pain. Through targeted treatments and sleep hygiene education, we help you achieve deeper, more restorative sleep patterns.",
    successRate: 83,
    treatmentTime: "2-6 weeks",
    category: "Sleep Wellness",
  },
];

const statistics = [
  { label: "Patient Satisfaction", value: 98, icon: Smile },
  { label: "Treatment Success Rate", value: 92, icon: Target },
  { label: "Recovery Time Improvement", value: 65, icon: Clock },
  { label: "Long-term Wellness", value: 89, icon: Award },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    condition: "Chronic Back Pain",
    quote:
      "After 6 months of chronic pain, Nirvana helped me get my life back. The personalized approach made all the difference.",
    rating: 5,
    improvement: "90% pain reduction",
  },
  {
    name: "Michael Chen",
    condition: "Sports Injury Recovery",
    quote:
      "The team's expertise in sports rehabilitation got me back to competitive running faster than I thought possible.",
    rating: 5,
    improvement: "Returned to sport in 8 weeks",
  },
  {
    name: "Emily Rodriguez",
    condition: "Post-Surgery Rehabilitation",
    quote:
      "The holistic approach to my recovery addressed not just my physical needs but my mental well-being too.",
    rating: 5,
    improvement: "Full functional recovery",
  },
];

export default function BenefitsShowcase() {
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen ">
      {/* Benefits Grid */}
      <section className="py-20">
        <div className=" mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover the
              <AuroraText>
                <span className=" px-2">BENEFITS</span>
              </AuroraText>
              of Choosing Nirvana
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enjoy faster recovery, lasting pain relief, improved mobility, and
              holistic support tailored to your unique needs. Experience the
              difference that expert care and personalized treatment can make
              for your health and quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              const isSelected = selectedBenefit === benefit.id;

              return (
                <Card
                  key={benefit.id}
                  className={`group cursor-pointer h-fit transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                    isSelected ? "ring-2 ring-primary shadow-2xl" : ""
                  }`}
                  onClick={() =>
                    setSelectedBenefit(isSelected ? null : benefit.id)
                  }
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {benefit.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          Success Rate
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          {benefit.successRate}%
                        </span>
                      </div>
                      <Progress value={benefit.successRate} className="h-2" />

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Treatment Time:</span>
                        <span className="font-medium text-gray-900">
                          {benefit.treatmentTime}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {benefit.details.map((detail, index) => (
                          <div
                            key={index}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>

                      {isSelected && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {benefit.expandedContent}
                          </p>
                        </div>
                      )}

                      <Button
                        variant="ghost"
                        className="w-full mt-4 group-hover:bg-blue-50 group-hover:text-primary"
                      >
                        {isSelected ? "Show Less" : "Learn More"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className=" mx-auto px-4 text-center">
          <div className=" rounded-3xl p-12">
            <div className="w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-8">
              <RefreshCw className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience the multitude of benefits our treatments offer at
              Nirvana Physiotherapy and Wellness Center, where we prioritize
              your well-being and support your journey towards a healthier and
              more fulfilling life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className=" text-lg px-8 py-4">
                Schedule Your Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 bg-transparent"
              >
                Learn About Our Services
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Free initial consultation • Personalized treatment plans •
              Insurance accepted
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
