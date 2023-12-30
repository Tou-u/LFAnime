<script lang="ts">
  import type { PageData } from './$types'
  import { baseUrl } from '$lib/utils'

  export let data: PageData
  const { anime } = data

  const image = `${baseUrl}${anime.image.original}`
</script>

<div class="overflow-hidden absolute top-0 left-0 right-0 bottom-0 -z-10 brightness-50">
  <img src={image} class="w-full h-full blur-3xl scale-[4] object-cover" alt="background" />
</div>
<main class="min-h-screen p-4">
  <section class="px-4 max-w-screen-xl mx-auto">
    <article class="flex flex-col items-center justify-center gap-5 sm:flex-row">
      <img
        id="thumbail"
        alt={anime.name}
        src="{baseUrl}{anime.image.original}"
        style="view-transition-name: img-{anime.id};"
        class="h-96"
      />
      <h1 class="text-2xl font-semibold text-white text-center">{anime.name}</h1>
    </article>
  </section>
</main>
