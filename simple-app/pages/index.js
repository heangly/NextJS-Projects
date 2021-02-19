import Head from 'next/head';

import ArticleList from '../components/ArticleList';
import Meta from '../components/Meta';

// run at build time
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

const Home = ({ articles }) => {
  return (
    <div>
      <Meta title='Home' />
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;
