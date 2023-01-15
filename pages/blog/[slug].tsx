import fs from 'fs'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import matter from 'gray-matter';
import Head from 'next/head';
import { BlogPostProps } from '../../screens/blog/BlogTypes';
import BlogScreen from '../../screens/blog/BlogScreen';

const Blog: NextPage<BlogPostProps> = ({ frontMatter, markdownBody }: BlogPostProps) => {
    return (
        <>
            <Head>
            <title>Ryland Crouse</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <BlogScreen {...{frontMatter, markdownBody}}/>
        </>
    )
}

export default Blog

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params!.slug;
    const fileName = fs.readFileSync(`blog/example.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    console.log(content)
    return {
        props: {
        frontMatter: frontmatter && frontmatter,
        markdownBody: content,
        },
    };
}

export const getStaticPaths: GetStaticPaths = async (params:any) => {
   return { paths: ['/blog/a'], fallback: false }
}

