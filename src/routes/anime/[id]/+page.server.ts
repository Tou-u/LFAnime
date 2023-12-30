import type { Anime } from '$lib/types'
import type { PageServerLoad } from './$types'
// import Vibrant from 'node-vibrant'

export const load = (async ({ params }) => {
  const { id } = params
  const res = await fetch(`https://shikimori.one/api/animes/${id}`)
  const anime = (await res.json()) as Anime

  // const vibrant = new Vibrant(`https://shikimori.one${anime.image.original}`)
  // const palette = (await vibrant.getPalette()).DarkVibrant?.hex

  return {
    anime
    // palette
  }
}) satisfies PageServerLoad
