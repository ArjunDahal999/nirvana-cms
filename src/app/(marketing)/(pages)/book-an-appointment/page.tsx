import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { MapPin, Phone, Building2, Star } from "lucide-react";
import { AuroraText } from "../../_components/ui/gradient-text";

export default function BookDemoPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative  pt-20 overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-yellow-300" />
              <span className="text-sm text-yellow-300">
                Trusted by 1500+ Patients
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 ">
              Book Your
              <AuroraText>
                <span className=" px-1">Appointment</span>
              </AuroraText>
              Today
            </h1>
            <p>
              Experience seamless healthcare management with our easy-to-use
              booking system. Schedule your appointment in just a few clicks!
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto md:px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Demo Booking Form */}
          <div className="space-y-8">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Schedule Your Demo
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-semibold"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                      className="h-12 border-2 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-semibold">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="h-12 border-2 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="h-12 border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+977 98XXXXXXXX"
                    required
                    className="h-12 border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold">
                    Tell us about your needs
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Describe what you're looking for and how we can help..."
                    className="min-h-[120px] border-2 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold h-14 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  Book Appointment
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Terms of Service and
                  Privacy Policy
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Maps */}
          <div className="space-y-8">
            {/* Office Locations */}
            <Card className=" border-0 bg-inherit  shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-gray-800">
                  <Building2 className="h-6 w-6 text-primary" />
                  Our Office Locations
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Visit us at any of our convenient locations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Lazimpat Office */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border-l-4 border-primary">
                  <h3 className="font-bold text-xl mb-4 text-gray-800">
                    Lazimpat Office
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <div className="text-gray-700">
                          <p className="font-semibold">
                            Lazimpat -03, Kathmandu
                          </p>
                          <p className="text-sm text-gray-600">
                            Next to Everest Bank
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <div className="text-gray-700">
                          <p className="font-semibold">01-4515374</p>
                          <p className="font-semibold">+977 9820815374</p>
                        </div>
                      </div>
                    </div>

                    <div className="h-48 rounded-lg overflow-hidden shadow-md">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1234567890123!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa1f23%3A0x74aa1f23190a74aa!2sLazimpat%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lazimpat Office Location"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Bhaktapur Office */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border-l-4 border-primary">
                  <h3 className="font-bold text-xl mb-4 text-gray-800">
                    Bhaktapur Office
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <div className="text-gray-700">
                          <p className="font-semibold">
                            Balanko, Suryabinayak-06
                          </p>
                          <p className="text-sm text-gray-600">Bhaktapur</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <div className="text-gray-700">
                          <p className="font-semibold">+977 01-6620250</p>
                          <p className="font-semibold">+977-9705815374</p>
                        </div>
                      </div>
                    </div>

                    <div className="h-48 rounded-lg overflow-hidden shadow-md">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1234567890123!2d85.4298!3d27.6710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198765432109%3A0x65432109876543ab!2sSuryabinayak%2C%20Bhaktapur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Bhaktapur Office Location"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
