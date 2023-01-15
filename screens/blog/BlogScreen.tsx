import React from 'react'
import md from 'markdown-it';
import { BlogPostProps } from './BlogTypes'

type Props = {}


const BlogScreen = ({ frontMatter, markdownBody }: BlogPostProps) => {
  return (
    <main className="min-h-screen w-full py-32">
        <div className='w-4/5 max-w-screen-sm prose mx-auto dark:prose-invert'>
            {frontMatter && <h1 className="mb-24 text-5xl">{frontMatter.title}</h1>}
            <div dangerouslySetInnerHTML={{ __html: md().render(markdownBody) }} />
        </div>
    </main>
  )
}
  

export default BlogScreen