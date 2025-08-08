import { AnimatedTestimonials } from "../ui/animated-testimonial";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I visited Nirvana Physiotherapy after suffering a leg fracture, and I’m really happy with the care I received. The staff was professional, attentive, and supportive throughout my recovery. They explained the treatment clearly, helped me regain strength and mobility, and always made sure I was comfortable. I highly recommend them for anyone needing physiotherapy support.",
      name: "Maniz Khawas",
      designation: "Kathmandu Resident",
      src: "/testimonail-2.png",
    },
    {
      quote: `I had been suffering from persistent back pain for a while, and Nirvana
Physiotherapy was a lifesaver. The team there is extremely professional and
attentive to detail. My treatment included acupuncture, stretching, the use of a
TENS machine, and ultrasound therapy. Each session was personalized, and
the combination of treatments worked wonders on my back. After just a few
sessions, I noticed a significant improvement in my mobility and a major
reduction in pain. I'm grateful for their care and would highly recommend
them to anyone dealing with back issues!`,
      name: "Barun Bhattarai",
      designation: "Football Enthusiast",
      src: "/testimonial.webp",
    },
    {
      quote:
        "One of the finest place to do physiotherapy at bhaktapur. The staffs are very friendly. The physio service is also very very good. Ms. Rashmee is the very helpful. And has very good knowledge. If you need physiotherapy consult Ms rashmee. The price is very reasonable and accessibility is very good.",
      name: "Kyarol Dhoju",
      designation: "Educator, Bhaktapur",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Great experience at Nirvana Physiotherapy! The staff is professional and friendly, and the treatment really helped with my back pain. The clinic has a calm, healing environment. Highly recommended",
      name: "Rajan Ghimirea",
      designation: "IT Professional",
      src: "/testimonial-3.png",
    },
    {
      quote:
        "My grandmother had a truly wonderful experience at Nirvana Physiotherapy & Wellness Center. The team is exceptionally professional, caring, and deeply knowledgeable in their field. Their combining Ayurvedic therapy, osteopathy, and naturopathy—played a major role for her recovery from her neck pain and dizziness. They have great equipments and are available for use easily. Great place for therapy and recovery sessions.",
      name: "Manee Raj Bhuju",
      designation: "Retired Civil Servant",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className=" flex items-center min-h-[90vh] flex-col px-2 md:px-0 py-12 ">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 leading-tight">
        Hear Directly From Our
        <span className="text-primary px-2 font-semibold">Valued Patients</span>
      </h2>
      <p className="text-sm md:text-xl text-muted-foreground text-center max-w-2xl mb-10">
        At
        <span className=" px-2 font-semibold">
          Nirvana Physiotherapy & Wellness Center
        </span>
        , our greatest reward is seeing our patients achieve lasting relief and
        improved well-being. Here’s what individuals across Nepal are saying
        about their journey to recovery and holistic health with us.
      </p>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}

export { AnimatedTestimonialsDemo };
