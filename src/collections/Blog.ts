import {
  BlocksFeature,
  DefaultNodeTypes,
  FixedToolbarFeature,
  lexicalEditor,
  lexicalHTMLField,
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'
import { ContentWithMedia } from './content'
import { HTMLConvertersFunction } from '@payloadcms/richtext-lexical/html'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [ContentWithMedia],
          }),
          FixedToolbarFeature(),
        ],
        admin: {
          hideInsertParagraphAtEnd: true,
        },
      }),
    },
    lexicalHTMLField({
      htmlFieldName: 'content_html', // this is what you want to name your new field
      lexicalFieldName: 'content', // the name of the field we're converting
      hidden: false, // if you want the field to be hidden in the admin UI, false by default
      storeInDB: false, // you can choose whether you want the HTML stored in your database, this is
      //@ts-expect-error
      converters: (({ defaultConverters }) => ({
        ...defaultConverters,
      })) as HTMLConvertersFunction<DefaultNodeTypes>,
    }),

    {
      name: 'Author Name',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    { name: 'featuredImage', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'readTime',
      type: 'text',
      required: true,
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'description',
          type: 'text',
          localized: true,
        },
        {
          name: 'keywords',
          type: 'text',
          localized: true,
        },
        {
          name: 'title',
          type: 'text',
        },
      ],
    },
  ],
}
