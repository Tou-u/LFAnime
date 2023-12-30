<script lang="ts">
  import type { PageData } from './$types'
  import { baseUrl } from '$lib/utils'

  export let data: PageData
  const { anime } = data
</script>

<main class="min-h-screen bg-black">
  <header class="h-60 blur-md">
    <img
      alt="header"
      src="{baseUrl}{anime.image.original}"
      class="h-full w-full object-cover object-center"
    />
  </header>

  <section class="px-4 max-w-screen-xl mx-auto">
    <article class="flex flex-col items-center justify-center gap-5 sm:flex-row">
      <img
        id="thumbail"
        alt={anime.name}
        src="{baseUrl}{anime.image.original}"
        style="view-transition-name: img-{anime.id};"
        class="-mt-52"
      />
      <h1 class="text-2xl font-semibold text-white text-center">{anime.name}</h1>
    </article>
  </section>
</main>
