import Head from 'next/head'

import Layout from '../components/layout/layout'
import { NotificationContextProvider } from '../store/notification-context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name='description' content='NextJS Events' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <NotificationContextProvider>
        <Component {...pageProps} />
      </NotificationContextProvider>
    </Layout>
  )
}

export default MyApp
