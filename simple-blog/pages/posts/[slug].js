import PostContent from '../../components/posts/postDetail/PostContent'
import { getPostData, getPostsFiles } from '../../lib/posts-util'
import Head from 'next/head'

const PostDetailPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  )
}

export const getStaticProps = (context) => {
  const {
    params: { slug }
  } = context

  const postData = getPostData(slug)

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles()
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''))

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false
  }
}

export default PostDetailPage
