import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Showcase from '@/components/Showcase'
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' context={description} />
        <meta name='keywords' context={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm, events'
}

export default Layout
