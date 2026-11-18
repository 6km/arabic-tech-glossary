import { TableProps } from '@/types'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { memo, useMemo } from 'react'

const fallbackData: never[] = []

const Table = memo(
  (props: TableProps) => {
    const data = useMemo(() => props.data || fallbackData, [props.data])
    const columns = useMemo(() => props.columns, [props.columns])

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })

    return (
      <div className="overflow-x-auto rounded-2xl border border-[#D7DCE2] bg-white shadow-sm">
        <table className="w-full min-w-[640px] table-fixed text-right">
          <thead className="bg-[#E6EAEF] text-[#0F172A]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="px-4 py-3 text-sm font-semibold leading-6 sm:px-5"
                    key={header.id}
                  >
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-[#D7DCE2]">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-[#F2F4F7]">
                {row.getVisibleCells().map((cell) => (
                  <td className="px-4 py-3 align-top leading-7 text-[#0F172A] sm:px-5" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
  () => false,
)

Table.displayName = 'Table'

export default Table
