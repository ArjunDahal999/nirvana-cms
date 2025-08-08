import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { HeroImage } from "../../../../../public";

const ExploreOurBlogsSection = () => {
  return (
    <section className="py-12">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-center font-bold text-gray-900 mb-6">
          Explore Our
          <span className="text-primary px-2">Blogs</span>
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Discover the latest insights and tips on physiotherapy, wellness, and
          health.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className=" p-4 shadow-none border-none bg-primary/10 group hover:shadow-xl transition-shadow duration-300">
            <Image
              src={HeroImage}
              alt="Blog Image 1"
              width={500}
              height={300}
              className=" rounded-lg group-hover:scale-105 transition-transform duration-700 object-cover"
            />
            <h3 className="text-xl font-semibold ">Blog Title 1</h3>
            <p className="text-gray-700 text-justify line-clamp-6 ">
              A brief description of the blog post that gives an overview of the
              content. A brief description of the blog post that gives an
              overview of the content. A brief description of the blog post that
              gives an overview of the content. A brief description of the blog
              post that gives an overview of the content. A brief description of
              the blog post that gives an overview of the content. A brief
              description of the blog post that gives an overview of the
              content.
            </p>
            <a href="#" className="text-primary hover:underline font-medium">
              Read More
            </a>
          </Card>
          <Card className="p-6  shadow-none border-none bg-primary/10 group  hover:shadow-xl transition-shadow duration-300">
            <Image
              src={HeroImage}
              alt="Blog Image   1"
              width={500}
              height={300}
              className="mb-4 rounded-lg group-hover:scale-105 transition-transform duration-700 object-cover"
            />
            <h3 className="text-xl font-semibold ">Blog Title 1</h3>
            <p className="text-gray-700 text-justify mb-4">
              A brief description of the blog post that gives an overview of the
              content. A brief description of the blog post that gives an
              overview of the content.
            </p>
            <a href="#" className="text-primary hover:underline font-medium">
              Read More
            </a>
          </Card>
          <Card className="p-6  shadow-none border-none bg-primary/10 group hover:shadow-xl transition-shadow duration-300">
            <Image
              src={HeroImage}
              alt="Blog Image 1"
              width={500}
              height={300}
              className="mb-4 rounded-lg group-hover:scale-105 transition-transform duration-700 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Blog Title 1</h3>
            <p className="text-gray-700 text-justify mb-4">
              A brief description of the blog post that gives an overview of the
              content. A brief description of the blog post that gives an
              overview of the content.
            </p>
            <a href="#" className="text-primary hover:underline font-medium">
              Read More
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExploreOurBlogsSection;
