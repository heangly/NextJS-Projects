import FeaturedPosts from '../components/homepage/FeaturedPosts'
import Hero from '../components/homepage/Hero'
import { getFeaturedPosts } from '../lib/posts-util'
import Head from 'next/head'

export const getStaticProps = async () => {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts
    }
  }
}

const Homepage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Heang's Blog</title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export default Homepage
