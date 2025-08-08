"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Heart,
  Brain,
  Stethoscope,
  Baby,
  Activity,
  Users,
  Zap,
  Dumbbell,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AuroraText } from "../../_components/ui/gradient-text";

import React, { useRef } from "react";

const conditions = [
  {
    id: 1,
    name: "Chronic Back Pain",
    category: "Musculoskeletal",
    icon: "🦴",
    severity: "Moderate to Severe",
    description:
      "Persistent pain in the lower, middle, or upper back lasting more than 12 weeks.",
    symptoms: [
      "Persistent aching",
      "Muscle spasms",
      "Limited mobility",
      "Stiffness",
    ],
    treatments: [
      "Physical therapy",
      "Pain management",
      "Exercise therapy",
      "Manual therapy",
    ],
    duration: "3-6 months",
    prevalence: "Very Common",
  },
  {
    id: 2,
    name: "Neck Pain",
    category: "Musculoskeletal",
    icon: "🦴",
    severity: "Mild to Moderate",
    description:
      "Pain and stiffness in the cervical spine area, often caused by poor posture or injury.",
    symptoms: [
      "Neck stiffness",
      "Headaches",
      "Muscle tension",
      "Limited range of motion",
    ],
    treatments: [
      "Cervical exercises",
      "Postural correction",
      "Manual therapy",
      "Heat/cold therapy",
    ],
    duration: "2-8 weeks",
    prevalence: "Very Common",
  },
  {
    id: 3,
    name: "Radiculopathy",
    category: "Neurological",
    icon: "🧠",
    severity: "Moderate to Severe",
    description:
      "Nerve root compression causing pain, numbness, or weakness along the nerve pathway.",
    symptoms: ["Radiating pain", "Numbness", "Tingling", "Muscle weakness"],
    treatments: [
      "Nerve mobilization",
      "Spinal decompression",
      "Anti-inflammatory therapy",
      "Strengthening exercises",
    ],
    duration: "6-12 weeks",
    prevalence: "Common",
  },
  {
    id: 4,
    name: "Arthritis",
    category: "Musculoskeletal",
    icon: "🦴",
    severity: "Moderate to Severe",
    description:
      "Joint inflammation causing pain, swelling, and reduced range of motion.",
    symptoms: ["Joint pain", "Swelling", "Stiffness", "Reduced mobility"],
    treatments: [
      "Joint mobilization",
      "Strengthening exercises",
      "Pain management",
      "Activity modification",
    ],
    duration: "Chronic condition",
    prevalence: "Very Common",
  },
  {
    id: 5,
    name: "Stroke",
    category: "Neurological",
    icon: "🧠",
    severity: "Severe",
    description:
      "Brain injury resulting from interrupted blood flow, causing various neurological deficits.",
    symptoms: [
      "Paralysis",
      "Speech difficulties",
      "Cognitive changes",
      "Balance problems",
    ],
    treatments: [
      "Neurorehabilitation",
      "Gait training",
      "Speech therapy",
      "Occupational therapy",
    ],
    duration: "6 months to 2 years",
    prevalence: "Moderate",
  },
  {
    id: 6,
    name: "Bell's Palsy",
    category: "Neurological",
    icon: "🧠",
    severity: "Moderate",
    description:
      "Sudden weakness or paralysis of facial muscles on one side of the face.",
    symptoms: [
      "Facial drooping",
      "Difficulty closing eye",
      "Altered taste",
      "Difficulty speaking",
    ],
    treatments: [
      "Facial exercises",
      "Electrical stimulation",
      "Massage therapy",
      "Eye protection",
    ],
    duration: "3-6 months",
    prevalence: "Uncommon",
  },
  {
    id: 7,
    name: "Post Traumatic Rehabilitation",
    category: "Rehabilitation",
    icon: "🏥",
    severity: "Variable",
    description:
      "Recovery process following traumatic injuries to restore function and mobility.",
    symptoms: ["Pain", "Reduced function", "Weakness", "Limited mobility"],
    treatments: [
      "Progressive exercises",
      "Functional training",
      "Pain management",
      "Mobility restoration",
    ],
    duration: "3-12 months",
    prevalence: "Variable",
  },
  {
    id: 8,
    name: "Spinal Cord Injury",
    category: "Neurological",
    icon: "🧠",
    severity: "Severe",
    description:
      "Damage to the spinal cord resulting in loss of function below the injury level.",
    symptoms: [
      "Paralysis",
      "Loss of sensation",
      "Bladder/bowel dysfunction",
      "Autonomic dysfunction",
    ],
    treatments: [
      "Mobility training",
      "Strengthening",
      "Adaptive equipment",
      "Functional training",
    ],
    duration: "Lifelong management",
    prevalence: "Rare",
  },
  {
    id: 9,
    name: "TMJ Disorders",
    category: "Musculoskeletal",
    icon: "🦴",
    severity: "Mild to Moderate",
    description:
      "Temporomandibular joint dysfunction causing jaw pain and limited mouth opening.",
    symptoms: [
      "Jaw pain",
      "Clicking sounds",
      "Limited mouth opening",
      "Headaches",
    ],
    treatments: [
      "Jaw exercises",
      "Manual therapy",
      "Posture correction",
      "Stress management",
    ],
    duration: "6-12 weeks",
    prevalence: "Common",
  },
  {
    id: 10,
    name: "Headache",
    category: "Neurological",
    icon: "🧠",
    severity: "Mild to Moderate",
    description:
      "Pain in the head or neck region, often related to tension or cervical dysfunction.",
    symptoms: ["Head pain", "Neck tension", "Light sensitivity", "Nausea"],
    treatments: [
      "Cervical mobilization",
      "Posture correction",
      "Relaxation techniques",
      "Trigger point therapy",
    ],
    duration: "Variable",
    prevalence: "Very Common",
  },
  {
    id: 11,
    name: "Migraine",
    category: "Neurological",
    icon: "🧠",
    severity: "Moderate to Severe",
    description:
      "Severe headaches often accompanied by nausea, vomiting, and light sensitivity.",
    symptoms: [
      "Severe headache",
      "Nausea",
      "Light sensitivity",
      "Visual disturbances",
    ],
    treatments: [
      "Trigger identification",
      "Relaxation techniques",
      "Cervical treatment",
      "Lifestyle modification",
    ],
    duration: "4-72 hours per episode",
    prevalence: "Common",
  },
  {
    id: 12,
    name: "Digestive Problems",
    category: "Gastrointestinal",
    icon: "🫃",
    severity: "Mild to Moderate",
    description:
      "Various digestive issues that may benefit from physical therapy approaches.",
    symptoms: [
      "Abdominal pain",
      "Bloating",
      "Irregular bowel movements",
      "Discomfort",
    ],
    treatments: [
      "Visceral mobilization",
      "Breathing exercises",
      "Posture correction",
      "Stress management",
    ],
    duration: "Variable",
    prevalence: "Common",
  },
  {
    id: 13,
    name: "Anxiety/Stress",
    category: "Mental Health",
    icon: "🧘",
    severity: "Mild to Severe",
    description:
      "Mental health conditions that can benefit from physical therapy interventions.",
    symptoms: [
      "Muscle tension",
      "Breathing difficulties",
      "Fatigue",
      "Sleep disturbances",
    ],
    treatments: [
      "Relaxation techniques",
      "Breathing exercises",
      "Exercise therapy",
      "Mindfulness",
    ],
    duration: "Ongoing management",
    prevalence: "Very Common",
  },
  {
    id: 14,
    name: "Post Pregnancy Rehab",
    category: "Women's Health",
    icon: "👶",
    severity: "Mild to Moderate",
    description:
      "Recovery and rehabilitation following childbirth to restore core strength and function.",
    symptoms: [
      "Core weakness",
      "Pelvic floor dysfunction",
      "Back pain",
      "Postural changes",
    ],
    treatments: [
      "Core strengthening",
      "Pelvic floor exercises",
      "Posture correction",
      "Gradual return to activity",
    ],
    duration: "3-6 months",
    prevalence: "Very Common",
  },
  {
    id: 15,
    name: "Stroke Paralysis Rehabilitation",
    category: "Rehabilitation",
    icon: "🏥",
    severity: "Severe",
    description:
      "Specialized rehabilitation for paralysis resulting from stroke.",
    symptoms: [
      "Paralysis",
      "Spasticity",
      "Balance problems",
      "Coordination difficulties",
    ],
    treatments: [
      "Neurorehabilitation",
      "Gait training",
      "Functional exercises",
      "Assistive devices",
    ],
    duration: "6 months to 2 years",
    prevalence: "Moderate",
  },
  {
    id: 16,
    name: "Menstrual Cycle Disorder",
    category: "Women's Health",
    icon: "👶",
    severity: "Mild to Moderate",
    description:
      "Irregularities in menstrual cycle that may benefit from physical therapy.",
    symptoms: [
      "Irregular periods",
      "Pelvic pain",
      "Cramping",
      "Hormonal imbalances",
    ],
    treatments: [
      "Pelvic floor therapy",
      "Exercise therapy",
      "Stress management",
      "Lifestyle modification",
    ],
    duration: "Variable",
    prevalence: "Common",
  },
  {
    id: 17,
    name: "Hormonal Issues",
    category: "Women's Health",
    icon: "👶",
    severity: "Mild to Moderate",
    description:
      "Hormonal imbalances affecting physical function and well-being.",
    symptoms: [
      "Fatigue",
      "Mood changes",
      "Physical symptoms",
      "Sleep disturbances",
    ],
    treatments: [
      "Exercise therapy",
      "Stress management",
      "Lifestyle modification",
      "Functional training",
    ],
    duration: "Ongoing management",
    prevalence: "Common",
  },
  {
    id: 18,
    name: "Sinusitis",
    category: "Respiratory",
    icon: "🫁",
    severity: "Mild to Moderate",
    description:
      "Inflammation of sinus cavities that may benefit from physical therapy techniques.",
    symptoms: [
      "Facial pain",
      "Nasal congestion",
      "Headaches",
      "Pressure sensation",
    ],
    treatments: [
      "Manual drainage",
      "Breathing exercises",
      "Postural drainage",
      "Relaxation techniques",
    ],
    duration: "2-4 weeks",
    prevalence: "Common",
  },
  {
    id: 19,
    name: "Asthma",
    category: "Respiratory",
    icon: "🫁",
    severity: "Mild to Severe",
    description:
      "Chronic respiratory condition affecting breathing and exercise tolerance.",
    symptoms: [
      "Shortness of breath",
      "Wheezing",
      "Chest tightness",
      "Coughing",
    ],
    treatments: [
      "Breathing exercises",
      "Exercise conditioning",
      "Postural correction",
      "Relaxation techniques",
    ],
    duration: "Lifelong management",
    prevalence: "Common",
  },
  {
    id: 20,
    name: "COPD Respiratory Problems",
    category: "Respiratory",
    icon: "🫁",
    severity: "Moderate to Severe",
    description:
      "Chronic obstructive pulmonary disease affecting breathing and daily activities.",
    symptoms: [
      "Shortness of breath",
      "Chronic cough",
      "Fatigue",
      "Reduced exercise tolerance",
    ],
    treatments: [
      "Pulmonary rehabilitation",
      "Breathing techniques",
      "Exercise training",
      "Energy conservation",
    ],
    duration: "Lifelong management",
    prevalence: "Moderate",
  },
  {
    id: 21,
    name: "Sports Injury",
    category: "Musculoskeletal",
    icon: "🦴",
    severity: "Mild to Severe",
    description:
      "Injuries sustained during sports activities requiring rehabilitation.",
    symptoms: ["Pain", "Swelling", "Reduced function", "Limited mobility"],
    treatments: [
      "Sport-specific rehabilitation",
      "Strengthening",
      "Return to sport training",
      "Injury prevention",
    ],
    duration: "2-16 weeks",
    prevalence: "Common",
  },
  {
    id: 22,
    name: "Constipation",
    category: "Gastrointestinal",
    icon: "🫃",
    severity: "Mild to Moderate",
    description:
      "Difficulty with bowel movements that may benefit from physical therapy.",
    symptoms: [
      "Infrequent bowel movements",
      "Straining",
      "Abdominal discomfort",
      "Bloating",
    ],
    treatments: [
      "Pelvic floor therapy",
      "Abdominal massage",
      "Breathing exercises",
      "Posture correction",
    ],
    duration: "2-8 weeks",
    prevalence: "Common",
  },
  {
    id: 23,
    name: "Frozen Shoulder",
    category: "Musculoskeletal",
    icon: "🦴",
    severity: "Moderate to Severe",
    description:
      "Adhesive capsulitis causing severe shoulder stiffness and pain.",
    symptoms: [
      "Severe shoulder stiffness",
      "Pain",
      "Limited range of motion",
      "Night pain",
    ],
    treatments: [
      "Joint mobilization",
      "Stretching exercises",
      "Pain management",
      "Gradual range of motion",
    ],
    duration: "12-18 months",
    prevalence: "Moderate",
  },
  {
    id: 24,
    name: "Myalgia",
    category: "Musculoskeletal",
    icon: "🦴",
    severity: "Mild to Moderate",
    description: "Muscle pain and tenderness affecting daily activities.",
    symptoms: ["Muscle pain", "Tenderness", "Stiffness", "Fatigue"],
    treatments: [
      "Soft tissue mobilization",
      "Stretching",
      "Strengthening",
      "Pain management",
    ],
    duration: "2-6 weeks",
    prevalence: "Common",
  },
  {
    id: 25,
    name: "Pediatric Cerebral Palsy",
    category: "Pediatric",
    icon: "👶",
    severity: "Variable",
    description:
      "Neurological condition affecting movement and posture in children.",
    symptoms: [
      "Movement difficulties",
      "Muscle stiffness",
      "Balance problems",
      "Coordination issues",
    ],
    treatments: [
      "Developmental therapy",
      "Gait training",
      "Strengthening",
      "Assistive devices",
    ],
    duration: "Lifelong management",
    prevalence: "Uncommon",
  },
  {
    id: 26,
    name: "Autism",
    category: "Pediatric",
    icon: "👶",
    severity: "Variable",
    description:
      "Developmental condition that may benefit from physical therapy for motor skills.",
    symptoms: [
      "Motor delays",
      "Sensory issues",
      "Coordination difficulties",
      "Social challenges",
    ],
    treatments: [
      "Sensory integration",
      "Motor skill development",
      "Social interaction",
      "Adaptive strategies",
    ],
    duration: "Ongoing support",
    prevalence: "Moderate",
  },
  {
    id: 27,
    name: "Muscular Dystrophy",
    category: "Pediatric",
    icon: "👶",
    severity: "Severe",
    description:
      "Progressive muscle weakness and degeneration requiring ongoing management.",
    symptoms: [
      "Progressive weakness",
      "Muscle wasting",
      "Mobility difficulties",
      "Respiratory issues",
    ],
    treatments: [
      "Strength maintenance",
      "Mobility aids",
      "Respiratory support",
      "Functional training",
    ],
    duration: "Lifelong management",
    prevalence: "Rare",
  },
  {
    id: 28,
    name: "Body Function Disturbances",
    category: "General",
    icon: "⚖️",
    severity: "Variable",
    description:
      "Various functional impairments affecting daily activities and quality of life.",
    symptoms: [
      "Functional limitations",
      "Pain",
      "Reduced mobility",
      "Coordination issues",
    ],
    treatments: [
      "Functional training",
      "Adaptive strategies",
      "Strengthening",
      "Mobility enhancement",
    ],
    duration: "Variable",
    prevalence: "Variable",
  },
  {
    id: 29,
    name: "Nerve Compression",
    category: "Neurological",
    icon: "🧠",
    severity: "Moderate",
    description:
      "Pressure on nerves causing pain, numbness, and functional impairment.",
    symptoms: ["Numbness", "Tingling", "Pain", "Weakness"],
    treatments: [
      "Nerve mobilization",
      "Posture correction",
      "Ergonomic training",
      "Strengthening",
    ],
    duration: "4-12 weeks",
    prevalence: "Common",
  },
  {
    id: 30,
    name: "Spinal Disc Prolapse",
    category: "Neurological",
    icon: "🧠",
    severity: "Moderate to Severe",
    description:
      "Herniated disc causing nerve compression and associated symptoms.",
    symptoms: ["Back pain", "Leg pain", "Numbness", "Weakness"],
    treatments: [
      "Spinal decompression",
      "Core strengthening",
      "Posture correction",
      "Pain management",
    ],
    duration: "6-12 weeks",
    prevalence: "Common",
  },
];

const categories = [
  { name: "All", icon: Activity, color: "bg-gray-100" },
  { name: "Musculoskeletal", icon: Dumbbell, color: "bg-blue-100" },
  { name: "Neurological", icon: Brain, color: "bg-purple-100" },
  { name: "Respiratory", icon: Stethoscope, color: "bg-green-100" },
  { name: "Rehabilitation", icon: Heart, color: "bg-red-100" },
  { name: "Pediatric", icon: Baby, color: "bg-yellow-100" },
  { name: "Women's Health", icon: Users, color: "bg-pink-100" },
  { name: "Mental Health", icon: Zap, color: "bg-indigo-100" },
  { name: "Gastrointestinal", icon: Activity, color: "bg-orange-100" },
  { name: "General", icon: Activity, color: "bg-gray-100" },
];

const severityColors = {
  Mild: "bg-green-100 text-green-800",
  "Mild to Moderate": "bg-yellow-100 text-yellow-800",
  Moderate: "bg-orange-100 text-orange-800",
  "Moderate to Severe": "bg-red-100 text-red-800",
  Severe: "bg-red-200 text-red-900",
  Variable: "bg-gray-100 text-gray-800",
};

const prevalenceColors = {
  "Very Common": "bg-red-100 text-red-800",
  Common: "bg-orange-100 text-orange-800",
  Moderate: "bg-yellow-100 text-yellow-800",
  Uncommon: "bg-blue-100 text-blue-800",
  Rare: "bg-purple-100 text-purple-800",
  Variable: "bg-gray-100 text-gray-800",
};

export default function MedicalConditionsUI() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSeverity, setSelectedSeverity] = useState("All");

  const handleScrollClick = () => {
    if (targetRef.current) {
      const yOffset = -110;
      const y =
        targetRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const filteredConditions = conditions.filter((condition) => {
    const matchesSearch =
      condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      condition.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      condition.symptoms.some((symptom) =>
        symptom.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || condition.category === selectedCategory;

    const matchesSeverity =
      selectedSeverity === "All" ||
      condition.severity.includes(selectedSeverity);

    return matchesSearch && matchesCategory && matchesSeverity;
  });

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category ? category.icon : Activity;
  };

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category ? category.color : "bg-gray-100";
  };

  return (
    <div className="min-h-screen  py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Medical
            <AuroraText>
              <span className="px-2"> Conditions & Treatment</span>
            </AuroraText>
            Guide
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive information about various medical conditions, their
            symptoms, and treatment approaches through physical therapy and
            rehabilitation.
          </p>
        </div>

        {/* Search and Filters */}
        <div className=" rounded-lg  p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search conditions, symptoms, or treatments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.name} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={selectedSeverity}
                onValueChange={setSelectedSeverity}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Severities</SelectItem>
                  <SelectItem value="Mild">Mild</SelectItem>
                  <SelectItem value="Moderate">Moderate</SelectItem>
                  <SelectItem value="Severe">Severe</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Category Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {categories.slice(1).map((category) => {
            const Icon = category.icon;
            const count = conditions.filter(
              (c) => c.category === category.name
            ).length;
            return (
              <Card
                key={category.name}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedCategory === category.name
                    ? "ring-2 ring-primary"
                    : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category.name);
                  handleScrollClick();
                }}
              >
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-2`}
                  >
                    <Icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                  <p className="text-xs text-gray-500">{count} conditions</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredConditions.length} of {conditions.length}{" "}
            conditions
          </p>
        </div>

        {/* Conditions Grid */}
        <div
          ref={targetRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredConditions.map((condition) => {
            const CategoryIcon = getCategoryIcon(condition.category);
            return (
              <Card
                key={condition.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full ${getCategoryColor(
                          condition.category
                        )} flex items-center justify-center`}
                      >
                        <CategoryIcon className="h-5 w-5 text-gray-700" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {condition.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {condition.category}
                        </CardDescription>
                      </div>
                    </div>
                    <span className="text-2xl">{condition.icon}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Badge
                      className={
                        severityColors[
                          condition.severity as keyof typeof severityColors
                        ]
                      }
                    >
                      {condition.severity}
                    </Badge>
                    <Badge
                      className={
                        prevalenceColors[
                          condition.prevalence as keyof typeof prevalenceColors
                        ]
                      }
                    >
                      {condition.prevalence}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    {condition.description}
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="details">
                      <AccordionTrigger className="text-sm">
                        View Details
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm mb-2">
                              Common Symptoms:
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {condition.symptoms.map((symptom, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {symptom}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sm mb-2">
                              Treatment Approaches:
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {condition.treatments.map((treatment, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {treatment}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div>
                              <span className="font-semibold">Duration:</span>
                              <p className="text-gray-600">
                                {condition.duration}
                              </p>
                            </div>
                            <div>
                              <span className="font-semibold">Prevalence:</span>
                              <p className="text-gray-600">
                                {condition.prevalence}
                              </p>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredConditions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No conditions found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedSeverity("All");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            This information is for educational purposes only. Always consult
            with healthcare professionals for proper diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  );
}
