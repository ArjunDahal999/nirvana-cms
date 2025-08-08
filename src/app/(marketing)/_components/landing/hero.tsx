import Image from 'next/image'
import React from 'react'
import { HeroImage } from '../../../../../public'
import Link from 'next/link'
import { AvatarList, UserRatingDisplay } from './user-rating-display'
import { ShimmerButton } from '@/components/ui/simmer-btn'
import { SparklesIcon } from 'lucide-react'
import { AuroraText } from '../ui/gradient-text'

const HeroSection = () => {
  return (
    <section>
      <div className=" pb-6 md:pb-24 lg:px-6 lg:pt-10">
        <div className="relative  flex  flex-col lg:px-6 lg:block">
          <div className="mx-auto  lg:text-left text-center lg:ml-0  ">
            <h1 className="mt-8  max-w-xl text-balance md:text-wrap text-3xl md:text-4xl md:text-left font-medium lg:text-7xl lg:mt-16 xl:text-5xl">
              Best
              <AuroraText>
                <span className=" px-2 font-bold">Physiotherapy</span>
              </AuroraText>
              Experts in Nepal
            </h1>
            <p className=" mt-2 md:mt-8 max-w-xl text-md text-pretty md:text-lg">
              Welcome to Nirvana Physiotherapy and Wellness Center, Nepal's leading destination for
              holistic healing and advanced rehabilitation
            </p>

            <div className="mt-8 flex flex-col gap-y-8 items-center md:items-start justify-center gap-2  lg:justify-start">
              <ShimmerButton className=" bg-background">
                <Link href="#link">
                  <span className=" flex gap-x-2 text-nowrap capitalize">
                    Start Your Healing Journey Today
                    <SparklesIcon />
                  </span>
                </Link>
              </ShimmerButton>
              <AvatarList />
            </div>
          </div>
          <Image
            className="pointer-events-none order-first ml-auto h-56 w-full object-cover  sm:h-96 lg:absolute lg:inset-0   lg:-top-10 lg:order-last lg:h-[60vh]  lg:w-[50vw]  lg:object-cover lg:rounded-2xl "
            src={HeroImage}
            alt="Abstract Object"
            quality={75}
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
