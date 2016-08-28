import React, { PropTypes } from 'react'
import { SortLink } from './SortLink'
import paginate from './PaginationWrapper'

export function VioletDataTable(props) {
  const { results, headers } = props

  const headerRow = headers.map(h =>
    <th key={h.field}>
      <SortLink
        {...props}
        {...h}
      />
    </th>
  )

  const rows = results.map((r, i) => {
    const columns = headers.map(h => {
      const { field, format } = h
      const data = r.get(field)
      const displayData = (format && format(data)) || data

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

VioletDataTable.propTypes = {
  headers: PropTypes.array.isRequired,
  results: PropTypes.object
}
export default paginate(VioletDataTable)
