import _terms from '@/data/terms.json'
import { Term } from '@/types'
import { paginate } from '@/utils/array'
import Fuse from 'fuse.js'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

// cache every request for an hour
app.use(async (c, next) => {
  await next()
  c.header('Cache-Control', 'max-age=3600')
})

// the amount of items per page
const pageSize = 10

// Fuse instance to be re-used in each request.
// putting it outside of the request handler is better for performance
const terms = new Fuse(_terms, {
  keys: ['arabic', 'english'],
  includeScore: false,
  isCaseSensitive: false,
  useExtendedSearch: true,
  ignoreLocation: true,
  ignoreFieldNorm: true,
})

app.get('/search', async (c, next) => {
  let query = c.req.query('q') || ''
  let pageNumber = parseInt(c.req.query('page') || '1', 10)

  let searchResult: Term[] = []
  let totalPages = 0

  if (query) {
    const fullSearchResult = terms.search(`'${query!}`)
    totalPages = Math.ceil(fullSearchResult.length / pageSize)

    searchResult = paginate(fullSearchResult, pageSize, pageNumber).map((r) => r.item)
  } else {
    totalPages = Math.ceil(_terms.length / pageSize)
    searchResult = paginate(_terms, pageSize, pageNumber)
  }

  return c.json({ result: searchResult, totalPages })
})

export const GET = handle(app)
