import { useRouter } from 'next/router'

const PortfolioProjectPage = () => {
  const router = useRouter()

  return (
    <div>
      <h1>The Portfolio Project Page {router.query.projectid}</h1>
    </div>
  )
}

export default PortfolioProjectPage
