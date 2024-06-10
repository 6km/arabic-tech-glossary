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
    <div className="flex items-center justify-center gap-2">
      {total > pageCount && current > 5 && (
        <Button className="font-bold" onClick={() => onPageChange(current - 1)} disabled={current === 1}>
          &lt;
        </Button>
      )}

      {visiblePages.map((pageNumber, index) => (
        <span key={index}>
          <Button
            className="font-bold data-[active=true]:bg-[#0F172A] data-[active=true]:text-[#E2E8F0]"
            data-active={current === pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Button>
        </span>
      ))}

      {total > pageCount && total - current > 4 && (
        <Button className="font-bold" onClick={() => onPageChange(current + 1)} disabled={current === total}>
          &gt;
        </Button>
      )}
    </div>
  )
}
