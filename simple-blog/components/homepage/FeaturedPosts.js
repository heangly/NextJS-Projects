import PostGrid from '../posts/PostGrid'
import classes from './FeaturedPosts.module.css'

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  )
}

export default FeaturedPosts
