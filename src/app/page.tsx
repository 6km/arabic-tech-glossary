'use client'

import Footer from '@/components/footer'
import Header from '@/components/header'
import Pagination from '@/components/pagination'
import Error from '@/components/screens/error'
import Loading from '@/components/screens/loading'
import NoData from '@/components/screens/no-data'
import Table from '@/components/table'
import useStore from '@/store'
import { Term } from '@/types'
import { createColumnHelper } from '@tanstack/react-table'
import { memo, useEffect, useState } from 'react'
import useSWR from 'swr'

const fetcher = (...args: [input: string | URL | Request, init?: RequestInit]) =>
  fetch.apply(null, args).then((res) => res.json())

const columnHelper = createColumnHelper<Term>()
const columns = [
  columnHelper.accessor('arabic', {
    header: 'المصطلح العربي',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('english', {
    header: 'الإنجليزية',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('description', {
    header: 'الوصف',
    footer: (info) => info.column.id,
  }),
]

const TermsTable = memo(() => {
  const { query, page, setPage } = useStore((state) => ({
    query: state.query,
    page: state.page,
    setPage: state.setPage,
  }))
  const [isLoading, setLoading] = useState(true)
  const [searchParams, setSearchParams] = useState<string>('')

  useEffect(() => {
    const newSearchParams = new URLSearchParams()

    if (query) newSearchParams.set('q', query)
    if (page) newSearchParams.set('page', page.toString())

    const newParamsString = newSearchParams.toString()

    if (searchParams !== newParamsString) setSearchParams(newParamsString)
  }, [query, page])

  const {
    data,
    error,
    isLoading: swr_isLoading,
  } = useSWR(`/api/search?${searchParams}`, fetcher, {
    revalidateOnMount: false,
    revalidateOnFocus: false,
    fallbackData: { result: [], totalPages: 0 },
    onSuccess: () => setLoading(false),
  })

  if (error) return <Error />
  if (swr_isLoading || isLoading) return <Loading />
  if (!data?.result.length) return <NoData />

  return (
    <>
      <Table data={data?.result} columns={columns} />

      <div className="mt-8">
        <Pagination current={page} total={data?.totalPages} onPageChange={setPage} />
      </div>
    </>
  )
})
TermsTable.displayName = 'TermsTable'

export default function Home() {
  return (
    <>
      <Header />

      <div className="my-8">
        <TermsTable />
      </div>

      <Footer />
    </>
  )
}
