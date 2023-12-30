export type PopularAnime = {
  id: number
  name: string
  russian: string
  image: Image
  url: string
  kind: string
  score: string
  status: string
  episodes: number
  episodes_aired: number
  aired_on: string
  released_on: string | null
}

export type Image = {
  original: string
  preview: string
  x96: string
  x48: string
}

export type Anime = {
  id: number
  name: string
  russian: string
  image: Image
  url: string
  kind: string
  score: string
  status: string
  episodes: number
  episodes_aired: number
  aired_on: string
  released_on: string
  rating: string
  english: string[]
  japanese: string[]
  synonyms: string[]
  license_name_ru: string
  duration: number
  description: string
  description_html: string
  description_source: string | null
  franchise: string
  favoured: boolean
  anons: boolean
  ongoing: boolean
  thread_id: number
  topic_id: number
  myanimelist_id: number
  rates_scores_stats: RatesScoresStat[]
  rates_statuses_stats: RatesStatusesStat[]
  updated_at: string
  next_episode_at: string | null
  fansubbers: string[]
  fandubbers: string[]
  licensors: string[]
  genres: Genre[]
  studios: Studio[]
  videos: Video[]
  screenshots: Screenshot[]
  user_rate: string | null
}

export type Genre = {
  id: number
  name: string
  russian: string
  kind: string
  entry_type: string
}

export type RatesScoresStat = {
  name: number
  value: number
}

export type RatesStatusesStat = {
  name: string
  value: number
}

export type Screenshot = {
  original: string
  preview: string
}

export type Studio = {
  id: number
  name: string
  filtered_name: string
  real: boolean
  image: string
}

export type Video = {
  id: number
  url: string
  image_url: string
  player_url: string
  name: null | string
  kind: string
  hosting: string
}
