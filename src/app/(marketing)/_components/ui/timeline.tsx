"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineEntry {
  count: number;
  title: string;
  content: React.ReactNode;
  description: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // ✅ ResizeObserver to update height when content size changes
  useEffect(() => {
    if (!ref.current) return;

    const updateHeight = () => {
      const rect = ref.current!.getBoundingClientRect();
      setHeight(rect.height);
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(ref.current);

    updateHeight(); // Initial call

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full md:px-2" ref={containerRef}>
      <div ref={ref} className="relative mx-auto pb-20">
        {data.map((item) => (
          <div key={item.count} className="flex justify-start pt-10 md:gap-16">
            <div className="sticky top-40 z-10 flex flex-col items-center self-start md:w-full md:basis-3/5 md:flex-row">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border bg-primary text-white font-semibold md:h-10 md:w-10 md:text-xl">
                  {item.count}
                </div>
              </div>
              <div className="hidden space-y-2 text-xl font-bold text-neutral-500 dark:text-neutral-500 md:block md:pl-20 md:text-3xl">
                <h3 className="font-bold text-primary dark:text-white">
                  {item.title}
                </h3>
                <ul>
                  {item.description.map((desc, descIndex) => (
                    <li
                      key={`${item.count}-${descIndex}`}
                      className="mb-2 flex items-start gap-2"
                    >
                      <span className="text-lg font-thin text-neutral-500 dark:text-white/80">
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-light text-black dark:text-white md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* ✅ Timeline Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 z-50 w-[2px] rounded-full bg-gradient-to-t from-green-500 from-[0%] via-emerald-500 via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
