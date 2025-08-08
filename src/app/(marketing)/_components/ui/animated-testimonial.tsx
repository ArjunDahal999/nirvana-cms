"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Testimonial = {
  quote: string;
  name: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 10000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Generate consistent rotation values based on index to avoid hydration mismatch
  const getRotateY = (index: number) => {
    // Use a deterministic value based on index instead of Math.random()
    const rotations = [-8, -4, 0, 4, 8, -6, 2, -2, 6, -10];
    return rotations[index % rotations.length];
  };

  return (
    <div
      className={cn(
        "max-w-sm md:max-w-full mx-auto px-4 relative md:px-8  ",
        className
      )}
    >
      <div className="relative grid grid-cols-1 overflow-hidden md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full ">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotateY(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRotateY(index),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: getRotateY(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <motion.p className="text-lg text-justify text-muted-foreground mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 z-[999] px-2 justify-between  top-[13vh] md:top-1/2 absolute w-full left-0.5 md:pt-0 md:hidden">
            <Button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className=" rounded-full animate-pulse duration-1000 "
            >
              <ChevronLeftIcon className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </Button>
            <Button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="rounded-full animate-pulse duration-1000 "
            >
              <ChevronRightIcon className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </Button>
          </div>
          <div className=" gap-4 pt-12 hidden md:flex md:pt-0">
            <Button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className=" rounded-full  duration-1000 "
            >
              <ChevronLeftIcon className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </Button>
            <Button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="rounded-full duration-1000 "
            >
              <ChevronRightIcon className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
