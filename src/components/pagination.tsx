import { useMemo } from 'react'
import Button from './button'

interface PaginationProps {
  current: number
  total: number
  onPageChange: (newPage: number) => void
}

const pageCount = 9

export default function Pagination({ total, current, onPageChange }: PaginationProps) {
  const visiblePages = useMemo(() => {
    const pages = []
    let startPage = Math.max(1, current - Math.floor(pageCount / 2))
    let endPage = startPage + pageCount - 1

    if (endPage >= total) {
      endPage = total
      startPage = Math.max(1, endPage - pageCount + 1)
    }

    // add visible pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }, [total, current])

  if (total <= 0) return null

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="ترقيم الصفحات">
      {total > pageCount && current > 5 && (
        <Button onClick={() => onPageChange(current - 1)} disabled={current === 1} aria-label="الصفحة السابقة">
          ‹
        </Button>
      )}

      {visiblePages.map((pageNumber) => (
        <Button
          key={pageNumber}
          className="data-[active=true]:border-[#0F172A] data-[active=true]:bg-[#0F172A] data-[active=true]:text-white"
          data-active={current === pageNumber}
          onClick={() => onPageChange(pageNumber)}
          aria-current={current === pageNumber ? 'page' : undefined}
        >
          {pageNumber}
        </Button>
      ))}

      {total > pageCount && total - current > 4 && (
        <Button onClick={() => onPageChange(current + 1)} disabled={current === total} aria-label="الصفحة التالية">
          ›
        </Button>
      )}
    </nav>
  )
}
