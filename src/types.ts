import { ColumnDef } from '@tanstack/react-table'

export type Term = {
  arabic?: string
  english?: string
  description?: string
}

export interface TableProps {
  data: Term[]
  columns: ColumnDef<unknown, any>[]
}
