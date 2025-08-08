import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Leaf,
  Heart,
  Brain,
  Stethoscope,
  Activity,
  Shield,
  Sparkles,
  Users,
  Award,
  Flower2,
  Sun,
} from "lucide-react";
import { AuroraText } from "../../_components/ui/gradient-text";
import FlipCard from "../../_components/ui/flip-card";

const conditions = [
  {
    name: "Chronic Back Pain",
    detail:
      "Persistent back discomfort lasting more than 3 months, often linked to disc or postural issues.",
  },
  {
    name: "Neck Pain",
    detail:
      "Pain or stiffness in the neck area, typically due to poor posture, strain, or nerve compression.",
  },
  {
    name: "Radiculopathy",
    detail:
      "Pinched nerve causing pain, numbness, or weakness radiating along the nerve path.",
  },
  {
    name: "Arthritis",
    detail:
      "Joint inflammation that leads to pain, stiffness, and reduced mobility.",
  },
  {
    name: "Stroke",
    detail:
      "Brain damage caused by disrupted blood flow, often requiring extensive rehabilitation.",
  },
  {
    name: "Bell's Palsy",
    detail: "Sudden, temporary facial paralysis due to nerve dysfunction.",
  },
  {
    name: "Post Traumatic Rehabilitation",
    detail:
      "Recovery and functional restoration after accidents, injuries, or surgeries.",
  },
  {
    name: "Spinal Cord Injury",
    detail:
      "Damage to the spinal cord affecting movement, sensation, and organ function.",
  },
  {
    name: "TMJ Disorders",
    detail:
      "Jaw joint issues causing pain, clicking sounds, and restricted movement.",
  },
  {
    name: "Headache",
    detail:
      "Various types of head pain, often triggered by tension, posture, or neurological causes.",
  },
  {
    name: "Migraine",
    detail:
      "Intense, throbbing headache often accompanied by nausea and light sensitivity.",
  },
  {
    name: "Digestive Problems",
    detail:
      "Issues with digestion like bloating, gas, or irregular bowel movements.",
  },
  {
    name: "Anxiety/Stress",
    detail:
      "Mental and physical symptoms affecting well-being, focus, and body function.",
  },
  {
    name: "Post Pregnancy Rehab",
    detail:
      "Therapy to help women recover physical strength and posture after childbirth.",
  },
  {
    name: "Stroke Paralysis Rehabilitation",
    detail:
      "Specialized therapy to restore movement and independence after stroke-related paralysis.",
  },
  {
    name: "Menstrual Cycle Disorder",
    detail:
      "Irregular or painful menstrual cycles, often linked to hormonal imbalances.",
  },
  {
    name: "Hormonal Issues",
    detail:
      "Endocrine system imbalances affecting metabolism, mood, or reproductive health.",
  },
  {
    name: "Sinusitis",
    detail:
      "Inflammation of sinus passages causing pressure, headaches, and breathing issues.",
  },
  {
    name: "Asthma",
    detail:
      "Chronic respiratory condition causing wheezing, breathlessness, and chest tightness.",
  },
  {
    name: "COPD Respiratory Problems",
    detail:
      "Progressive lung diseases that restrict airflow and make breathing difficult.",
  },
  {
    name: "Sports Injury",
    detail:
      "Physical injuries occurring during sports or physical activity, such as sprains or strains.",
  },
  {
    name: "Constipation",
    detail:
      "Difficulty in bowel movements, often due to diet, stress, or gut dysfunction.",
  },
  {
    name: "Frozen Shoulder",
    detail:
      "Stiffness and pain in the shoulder joint limiting range of motion.",
  },
  {
    name: "Myalgia",
    detail:
      "General muscle pain resulting from overuse, strain, or underlying conditions.",
  },
  {
    name: "Pediatrics Cerebral Palsy",
    detail:
      "Motor disability in children caused by brain development issues before or at birth.",
  },
  {
    name: "Autism",
    detail:
      "Neurodevelopmental disorder affecting communication, behavior, and social interaction.",
  },
  {
    name: "Muscular Dystrophy",
    detail:
      "Genetic condition causing progressive weakening of muscles over time.",
  },
  {
    name: "Body Function Disturbances",
    detail:
      "General dysfunctions in physical coordination, balance, or muscular control.",
  },
  {
    name: "Nerve Compression",
    detail:
      "Pressure on nerves leading to tingling, numbness, or pain in affected areas.",
  },
  {
    name: "Spinal Disc Prolapse",
    detail:
      "Herniated disc causing nerve irritation and back or leg pain (sciatica).",
  },
];

const treatments = [
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    title: "Allopathic Medicine",
    description: "Modern scientific treatments with evidence-based approaches",
  },
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: "Ayurvedic Therapy",
    description: "Traditional herbal medicine and holistic healing practices",
  },
  {
    icon: <Activity className="w-8 h-8 text-primary" />,
    title: "Yogic Principles",
    description: "Mind-body integration through breathwork and meditation",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Osteopathic Care",
    description: "Gentle hands-on techniques for body alignment and balance",
  },
];

export default function NirvanaWellnessPage() {
  return (
    <div className="min-h-screen ">
      <div className="relative p-4 md:p-8  mx-auto ">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-12 relative">
          <div className="absolute inset-0  rounded-3xl -z-10"></div>

          {/* Decorative SVG Elements */}
          <div className="absolute top-4 left-4 opacity-20">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <path
                d="M30 5 Q40 15 30 25 Q20 15 30 5 M30 25 Q40 35 30 45 Q20 35 30 25 M30 45 Q40 55 30 65 Q20 55 30 45"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary"
              />
            </svg>
          </div>
          <div className="absolute top-4 right-4 opacity-20">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle
                cx="30"
                cy="30"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary"
              />
              <path
                d="M30 15 L35 25 L30 35 L25 25 Z"
                fill="currentColor"
                className="text-primary"
              />
            </svg>
          </div>

          <div className="flex justify-center mb-4">
            <div className="bg-emerald-100 p-4 rounded-full">
              <Leaf className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold">
            <AuroraText>Nirvana Physiotherapy & Wellness Center</AuroraText>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Nepal's premier destination for integrative healing, combining the
            wisdom of
            <span className="text-primary font-semibold">
              {" "}
              Ayurvedic traditions
            </span>{" "}
            with
            <span className="text-primary font-semibold">
              {" "}
              modern medical science
            </span>{" "}
            for complete wellness
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-gray-700">
                Certified Practitioners
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-gray-700">
                Holistic Approach
              </span>
            </div>
          </div>
        </div>
        {/* Treatment Approaches */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800">
              Our Unique Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the rare combination of ancient wisdom and modern
              science
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {treatment.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {treatment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Conditions We Treat */}
        <Card className="border-0 shadow-none bg-inherit  backdrop-blur-sm">
          <CardContent className=" ">
            <div className="text-center space-y-6 mb-8">
              <div className="flex justify-center relative">
                <div className="bg-blue-100 p-4 rounded-full z-10">
                  <Stethoscope className="w-10 h-10 text-primary" />
                </div>
                {/* Decorative SVG: Health cross with heartbeat */}
                <div className="absolute -top-6 -right-8 opacity-30">
                  <svg width="56" height="56" viewBox="0 0 56 56">
                    <rect
                      x="22"
                      y="8"
                      width="12"
                      height="40"
                      rx="6"
                      fill="#10b981"
                    />
                    <rect
                      x="8"
                      y="22"
                      width="40"
                      height="12"
                      rx="6"
                      fill="#10b981"
                    />
                    <polyline
                      points="12,28 20,34 28,20 36,36 44,28"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* Decorative SVG: Medicine bottle */}
                <div className="absolute -bottom-6 -left-8 opacity-20">
                  <svg width="48" height="48" viewBox="0 0 48 48">
                    <rect
                      x="14"
                      y="18"
                      width="20"
                      height="22"
                      rx="4"
                      fill="#fbbf24"
                    />
                    <rect
                      x="18"
                      y="10"
                      width="12"
                      height="8"
                      rx="2"
                      fill="#2563eb"
                    />
                    <rect
                      x="20"
                      y="26"
                      width="8"
                      height="4"
                      rx="1"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800">
                Conditions We Treat
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive care for a wide range of health conditions using
                our integrated approach
              </p>
            </div>

            <div className=" relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-y-4 ">
              {conditions.map((condition, index) => (
                <FlipCard
                  key={index}
                  title={condition.name}
                  description={condition.detail}
                />
              ))}
            </div>

            <Separator className="my-8 bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-6 py-12 bg-gradient-to-r from-primary/90 to-primary/70 rounded-3xl text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <path
                d="M0 100 Q100 50 200 100 T400 100"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0 120 Q100 70 200 120 T400 120"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="100"
                cy="50"
                r="20"
                fill="currentColor"
                opacity="0.1"
              />
              <circle
                cx="300"
                cy="150"
                r="15"
                fill="currentColor"
                opacity="0.1"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <Sun className="w-12 h-12 text-yellow-300" />
            </div>
            <h2 className="text-3xl md:text-4xl  font-bold">
              Begin Your Healing Journey
            </h2>
            <p className="text-xl   text-white/60 max-w-2xl mx-auto">
              Experience the perfect harmony of ancient wisdom and modern
              medicine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
