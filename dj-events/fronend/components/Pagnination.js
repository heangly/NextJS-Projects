import Link from 'next/link'

const Pagnination = ({ page, total, PER_PAGE }) => {
  const lastPage = Math.ceil(total / PER_PAGE)

  return (
    <>
      {page > 1 && (
        <Link href={`/events?page=${page - 1}`}>
          <a href='' className='btn-secondary'>
            prev
          </a>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`}>
          <a href='' className='btn-secondary'>
            next
          </a>
        </Link>
      )}
    </>
  )
}

export default Pagnination
