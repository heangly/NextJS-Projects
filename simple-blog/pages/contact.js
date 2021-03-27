import ContactForm from '../components/contact/ContactForm'
import Head from 'next/head'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages' />
      </Head>
      <ContactForm />
    </>
  )
}

export default Contact
