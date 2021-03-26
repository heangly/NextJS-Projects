import FeaturedPosts from '../components/homepage/FeaturedPosts'
import Hero from '../components/homepage/Hero'

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is the React framwork for production - it makes building React apps and sites a breeze',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is the React framwork for production - it makes building React apps and sites a breeze',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is the React framwork for production - it makes building React apps and sites a breeze',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is the React framwork for production - it makes building React apps and sites a breeze',
    date: '2022-02-10'
  }
]

const Homepage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  )
}

export default Homepage
