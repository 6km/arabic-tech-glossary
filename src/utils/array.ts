export function paginate<T>(data: T[], pageSize: number, pageNumber: number) {
  const start = (pageNumber - 1) * pageSize,
    end = start + pageSize

  return data.slice(start, end)
}
