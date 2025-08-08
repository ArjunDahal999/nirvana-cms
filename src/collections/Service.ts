import type { GlobalConfig } from 'payload'

export const OurServiceSection: GlobalConfig = {
  slug: 'ourServices',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'services',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'serviceName',
          type: 'text',
          required: true,
        },
        {
          name: 'serviceDescription',
          type: 'textarea',
          required: true,
        },
        {
          name: 'serviceImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
