import React from 'react'
import HeroSection from '../_components/landing/hero'
import { WhyChooseNirvana } from '../_components/landing/why-choose-nirvana'
import WhatsNewSection from '../_components/landing/whats-new'
import OurServicesV2 from '../_components/landing/our-service-v2'
import { AnimatedTestimonialsDemo } from '../_components/landing/testimonial'
import ExploreOurBlogsSection from '../_components/landing/explore-our-blogs'

export const dynamic = 'force-dynamic'

const MarketingRootPage = () => {
  return (
    <div className="">
      <HeroSection />
      <WhyChooseNirvana />
      <OurServicesV2 />
      <WhatsNewSection />
      <ExploreOurBlogsSection />
      <AnimatedTestimonialsDemo />
    </div>
  )
}

export default MarketingRootPage
