import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import { RenderHTML } from '@/components/render'
const BlogsRootPage = async () => {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({ collection: 'blogs', limit: 10 })

  console.log('Blogs:', docs[0])
  return <RenderHTML data={docs[0].content} />
}

export default BlogsRootPage
