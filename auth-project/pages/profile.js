import UserProfile from '../components/profile/user-profile'
import { getSession } from 'next-auth/client'

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req })
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }
  return {
    props: {
      session
    }
  }
}

function ProfilePage({ session }) {
  return <UserProfile />
}

export default ProfilePage
