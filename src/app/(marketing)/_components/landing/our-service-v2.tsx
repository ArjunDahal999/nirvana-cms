import React from 'react'
import Image from 'next/image'

import {
  AyurvedicTherapy,
  LBTherapyImage,
  PhysioTherapyImage,
  ChiropracticImage,
  OsteopathyImage,
  NaturopathyImage,
} from '../../../../../public'
import { Timeline } from '../ui/timeline'
import { AuroraText } from '../ui/gradient-text'
import { getPayload } from 'payload'

import config from '@/payload.config'
import { Media } from '@/payload-types'

export const fetchCache = 'force-no-store'

const OurServicesV2 = async () => {
  const payload = await getPayload({ config })

  const { services } = await payload.findGlobal({ slug: 'ourServices' })

  const serviceDetailsMap = services.map((service, index) => ({
    count: index + 1,
    title: service.serviceName,
    description: [service.serviceDescription],
    content: (
      <Image
        key={index}
        src={(service.serviceImage as Media).url!}
        alt={`${(service.serviceImage as Media).alt}`}
        width={1900}
        height={1080}
        className="rounded-lg object-cover"
      />
    ),
  }))

  const imageProps = {
    width: 1900,
    height: 1080,
    className: 'rounded-lg object-cover',
  }

  const serviceDetails = [
    {
      count: 1,
      title: 'Ayurvedic Therapy',
      description: [
        'Experience personalized care for optimal well-being through traditional Ayurvedic healing practices.',
        'Our Ayurvedic therapies are tailored to your unique constitution, focusing on natural remedies and holistic approaches.',
        'Benefit from detoxification, stress relief, and improved vitality with our expert practitioners.',
      ],
      content: (
        <Image key={1} src={AyurvedicTherapy} alt="Ayurvedic Therapy image" {...imageProps} />
      ),
    },
    {
      count: 2,
      title: 'Chiropractic',
      description: [
        'Get expert chiropractic care in Kathmandu at Nirvana Physiotherapy. Enjoy safe, natural relief from back pain, poor posture, and spinal misalignment.',
        'Our chiropractors use gentle adjustments to restore spinal alignment and improve nervous system function.',
        'Experience enhanced mobility, reduced discomfort, and better posture through our chiropractic sessions.',
      ],
      content: <Image key={2} src={ChiropracticImage} alt="Chiropractic image" {...imageProps} />,
    },
    {
      count: 3,
      title: 'L&B Therapy',
      description: [
        'A calm and relaxing session for stress reduction and improved well-being. Using light therapy and gentle movements to reduce stress, relieve tension, and promote deep relaxation.',
        'L&B Therapy is ideal for those seeking emotional balance and mental clarity.',
        'Sessions are designed to rejuvenate your mind and body, leaving you refreshed and energized.',
      ],
      content: <Image key={3} src={LBTherapyImage} alt="L&B Therapy image" {...imageProps} />,
    },
    {
      count: 4,
      title: 'Physiotherapy',
      description: [
        'Physiotherapy in Kathmandu – Personalized treatment to restore strength, improve mobility, relieve pain, and enhance flexibility with evidence-based techniques for faster recovery.',
        'Our physiotherapists develop custom plans for injury rehabilitation, chronic pain management, and post-surgical recovery.',
        'Benefit from hands-on therapy, exercise programs, and education for long-term health.',
      ],
      content: <Image key={4} src={PhysioTherapyImage} alt="Physiotherapy image" {...imageProps} />,
    },
    {
      count: 5,
      title: 'Naturopathy',
      description: [
        'Experience holistic healing with customized care using natural therapies, herbal medicine, and lifestyle modifications to boost immunity, restore balance, and promote overall well-being naturally.',
        'Our naturopathy services focus on prevention and root-cause resolution using safe, non-invasive methods.',
        'Receive guidance on nutrition, detox, and wellness for sustainable health improvements.',
      ],
      content: <Image key={5} src={NaturopathyImage} alt="Naturopathy image" {...imageProps} />,
    },
    {
      count: 6,
      title: 'Osteopathy',
      description: [
        'Skilled osteopaths use gentle, hands-on manual therapy to restore balance, relieve pain, improve mobility, reduce muscle tension, enhance circulation, and support natural healing.',
        'Osteopathy is effective for musculoskeletal issues, headaches, and chronic pain conditions.',
        'Our approach is holistic, aiming to improve your overall function and well-being.',
      ],
      content: <Image key={6} src={OsteopathyImage} alt="Osteopathy image" {...imageProps} />,
    },
  ]
  return (
    <div className="relative  ">
      <h2 className=" text-center text-3xl md:text-5xl font-bold">
        <AuroraText>
          <span>Our Services</span>
        </AuroraText>
      </h2>
      <Timeline data={serviceDetailsMap} />
    </div>
  )
}

export default OurServicesV2
