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
      <table className="mt-0 w-full table-fixed text-right">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="[&:not(:last-of-type):pe-3] mt-0 w-[280px] break-words pb-2 ps-0 pt-0 align-top leading-6"
                  style={{
                    textShadow: '0 0.01px',
                  }}
                  key={header.id}
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="[&:not(:last-of-type):pe-3] py-2 ps-0 align-top font-[500] leading-6" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  },
  () => false,
)

Table.displayName = 'Table'

export default Table
