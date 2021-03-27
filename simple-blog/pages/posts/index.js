import AllPosts from '../../components/posts/AllPosts'
import { getAllPosts } from '../../lib/posts-util'
import Head from 'next/head'

export const getStaticProps = async () => {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts
    }
  }
}

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming related tutorials and posts'
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  )
}

export default AllPostsPage
