import { AccessorKeyColumnDef, ColumnDef, ColumnHelper } from '@tanstack/react-table'

export type Term = {
  arabic?: string
  english?: string
  description?: string
}

export interface TableProps {
  data: Term[]
  columns: AccessorKeyColumnDef<Term, string | undefined>[]
}
