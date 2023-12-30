import type { PopularAnime } from '$lib/types'
import type { PageServerLoad } from './$types'

export const load = (async () => {
  const res = await fetch(
    'https://shikimori.one/api/animes?order=popularity&limit=18&exclude_ids=1535'
  )
  const animes = (await res.json()) as PopularAnime[]
  return {
    animes
  }
}) satisfies PageServerLoad
