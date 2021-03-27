import classes from './AllPosts.module.css'
import PostGrid from './PostGrid'

const AllPosts = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  )
}

export default AllPosts
