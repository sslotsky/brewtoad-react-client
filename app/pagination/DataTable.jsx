import React from 'react'
import { SortLink } from 'APP/pagination/SortLink'
import paginate from './PaginationWrapper'

export function DataTable(props) {
  const { listId, results, actions, headers } = props

  const headerRow = headers.map(h =>
    <th key={h.field}>
      <SortLink
        {...props}
        field={h.field}
        text={h.text}
      />
    </th>
  )

  const rows = results.map((r, i) => {
    const columns = headers.map(h => {
      const { field, format } = h
      const data = r.get(field)
      const displayData = format && format(data) || data

      return (
        <td key={field}>
          {displayData}
        </td>
      )
    })

    return (
      <tr key={`results-${i}`}>
        {columns}
      </tr>
    )
  })

  return (
    <table className="border">
      <thead>
        <tr>
          {headerRow}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default paginate(DataTable)
