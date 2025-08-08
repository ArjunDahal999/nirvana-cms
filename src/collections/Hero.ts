import type { GlobalConfig } from 'payload'

export const HeroSection: GlobalConfig = {
  slug: 'heroPage',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'heroDescription',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonLink1',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonText1',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonLink2',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonText2',
      type: 'text',
      required: true,
    },
  ],
}
