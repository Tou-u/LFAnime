import type { Anime } from '$lib/types'
import type { PageServerLoad } from './$types'

export const load = (async ({ params }) => {
  const { id } = params
  const res = await fetch(`https://shikimori.one/api/animes/${id}`)
  const anime = (await res.json()) as Anime

  return {
    anime
  }
}) satisfies PageServerLoad
