import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iure,
          itaque optio perspiciatis explicabo aperiam distinctio neque
          consequatur magnam quo totam maiores error, laboriosam et
          voluptatibus? Amet ab laboriosam cupiditate optio, fugiat asperiores
          non cum veniam magnam quaerat maxime debitis iure velit nisi et
          ducimus tenetur? Praesentium veritatis beatae corporis!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>

        <Link href='/posts/first-post'>
          <a>Go To Post</a>
        </Link>
      </section>
    </Layout>
  );
}
