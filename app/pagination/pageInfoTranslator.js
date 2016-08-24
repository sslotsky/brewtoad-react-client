let [pageParam, pageSizeParam] = ['page', 'pageSize']

export function configurePageParams({ page, perPage }) {
  if (page) {
    pageParam = page
  }

  if (perPage) {
    pageSizeParam = perPage
  }
}

export function translate(paginator) {
  const {
    id,
    page,
    pageSize,
    filters
  } = paginator.toJS()

  return {
    id,
    query: {
      [pageParam]: page,
      [pageSizeParam]: pageSize,
      ...filters
    }
  }
}
