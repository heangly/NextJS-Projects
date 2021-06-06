import { useRouter } from 'next/router'
const ClientProjectsPage = () => {
  const router = useRouter()
  const clickHandler = () => {
    router.push('/clients/max/projectA')
  }

  return (
    <div>
      <h1>THe projects of a Given Clients</h1>
      <button onClick={clickHandler}>Load Project A</button>
    </div>
  )
}

export default ClientProjectsPage
