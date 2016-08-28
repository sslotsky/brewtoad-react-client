let [
  pageParam,
  pageSizeParam,
  sortParam,
  sortOrderParam,
  useBooleanOrdering
] = [
  'page',
  'pageSize',
  'sort',
  'sortOrder',
  false
]

export function configurePageParams({
  page,
  perPage,
  sort,
  sortOrder,
  sortReverse
}) {
  if (page) {
    pageParam = page
  }

  if (perPage) {
    pageSizeParam = perPage
  }

  if (sort) {
    sortParam = sort
  }

  if (sortOrder) {
    sortOrderParam = sortOrder
  }

  useBooleanOrdering = !!sortReverse
}

function sortDirection(value) {
  if (useBooleanOrdering) {
    return value
  }

  return value ? 'desc' : 'asc'
}

function sortParams(paginator) {
  if (paginator.get('sort')) {
    return {
      [sortParam]: paginator.get('sort'),
      [sortOrderParam]: sortDirection(paginator.get('sortReverse'))
    }
  }

  return {}
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
      ...sortParams(paginator),
      ...filters
    }
  }
}
