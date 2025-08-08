import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Activity, Heart, Target } from "lucide-react";

const cards = [
  {
    badge: {
      text: "🎉 FIRST TIME IN NEPAL",
      className: "bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1",
    },
    icon: (
      <Heart className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
    ),
    title: "Osteopathy for Nepalese",
    titleClass: "group-hover:text-primary",
    description: "Holistic, non-invasive manual therapy",
    content: (
      <>
        <p className="text-gray-700 leading-relaxed">
          Osteopathy is a holistic, non-invasive manual therapy that addresses
          the root cause of health issues, promoting total body health and
          overall well-being.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Experience personalized care tailored to your unique needs, focusing
          on restoring balance and optimizing your health.
        </p>
        <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
          <p className="text-primary font-medium">
            By considering physical, mental, and spiritual aspects, it restores
            balance, alleviates pain, improves mobility, and treats various
            conditions.
          </p>
        </div>
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Target className="w-5 h-5" />
          <span>Available at Nirvana Physiotherapy & Wellness Center</span>
        </div>
      </>
    ),
  },
  {
    badge: {
      text: "🚀 NEWEST TECHNIQUE",
      className: "bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1",
    },
    icon: (
      <Activity className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
    ),
    title: "L&B Therapy Technique",
    titleClass: "group-hover:text-primary",
    description: "Advanced pain management technique",
    content: (
      <>
        <p className="text-gray-700 leading-relaxed">
          L&B is an advanced pain management technique using osteopressure at
          specific points combined with targeted exercises.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { title: "Pain Relief", desc: "Effective treatment" },
            { title: "Joint Mobility", desc: "New angles" },
            { title: "Muscle Tension", desc: "Normalized" },
            { title: "Muscle Activation", desc: "Fiber reactivation" },
          ].map((item, idx) => (
            <div key={idx} className="bg-primary/10 p-3 rounded-lg text-center">
              <div className="font-semibold text-primary">{item.title}</div>
              <div className="text-sm text-primary">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Target className="w-5 h-5" />
          <span>Try L&B Therapy at Nirvana today!</span>
        </div>
      </>
    ),
  },
];

const WhatsNewSection = () => {
  return (
    <div className=" p-1 md:p-6">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">What's New?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exciting New Services at
            <span className="text-primary"> Nirvana</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest holistic therapies designed to enhance your
            wellness journey
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={card.badge.className}>
                    {card.badge.text}
                  </Badge>
                  {card.icon}
                </div>
                <CardTitle
                  className={`text-2xl text-gray-900 transition-colors ${card.titleClass}`}
                >
                  {card.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">{card.content}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsNewSection;
