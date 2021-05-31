import { useRouter } from 'next/router'

const FilteredEventsPage = () => {
  const { slug } = useRouter().query

  return (
    <div>
      <h1>Filtered Events Page {slug}</h1>
    </div>
  )
}

export default FilteredEventsPage
