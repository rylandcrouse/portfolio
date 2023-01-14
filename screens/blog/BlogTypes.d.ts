export type BlogFrontMatter = {
    title: string
    description: string
    publishedDate: string
    tags: string[]
}

export type BlogPostProps = {
    frontMatter: BlogFrontMatter
    markdownBody: string
}

export type BlogPostsProps = {
    posts?: BlogPostProps[]
}