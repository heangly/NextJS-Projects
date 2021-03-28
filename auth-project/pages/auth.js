import AuthForm from '../components/auth/auth-form'
import { useEffect, useState } from 'react'
import { getSession } from 'next-auth/client'
import { useRouter } from 'next/router'

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/')
      } else {
        setIsLoading(false)
      }
    })
  }, [router])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <AuthForm />
}

export default AuthPage
