import AllPosts from '../../components/posts/all-post'

const AllPostsPage = () => {
  const DUMMY_POSTS = [
    {
      slug: 'getting-started-with-nextjs',
      title: 'Getting Started with NextJS',
      image: 'getting-started-nextjs.png',
      excerpt:
        'NextJs is a the React framework for production - it makes building fullstack application easy. It also provides server-side rendering features',
      date: '2022-02-10'
    },
    {
      slug: 'getting-started-with-nextjs2',
      title: 'Getting Started with NextJS',
      image: 'getting-started-nextjs.png',
      excerpt:
        'NextJs is a the React framework for production - it makes building fullstack application easy. It also provides server-side rendering features',
      date: '2022-02-10'
    },
    {
      slug: 'getting-started-with-nextjs3',
      title: 'Getting Started with NextJS',
      image: 'getting-started-nextjs.png',
      excerpt:
        'NextJs is a the React framework for production - it makes building fullstack application easy. It also provides server-side rendering features',
      date: '2022-02-10'
    },
    {
      slug: 'getting-started-with-nextjs4',
      title: 'Getting Started with NextJS',
      image: 'getting-started-nextjs.png',
      excerpt:
        'NextJs is a the React framework for production - it makes building fullstack application easy. It also provides server-side rendering features',
      date: '2022-02-10'
    }
  ]

  return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage
