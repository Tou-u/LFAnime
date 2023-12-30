<script lang="ts">
  import type { PageData } from './$types'
  import { baseUrl } from '$lib/utils'

  export let data: PageData
</script>

<main class="p-4 bg-black">
  <section class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
    {#each data.animes as anime}
      <article class="h-96 relative rounded-md overflow-hidden">
        <a href="/anime/{anime.id}">
          <img
            alt={anime.name}
            src="{baseUrl}{anime.image.original}"
            class="h-full w-full object-cover"
            style="view-transition-name: img-{anime.id};"
          />
          <div
            class="absolute bottom-0 left-0 right-0 text-center backdrop:blur-sm bg-black/80 text-white"
          >
            <p>{anime.name}</p>
          </div>
        </a>
      </article>
    {/each}
  </section>
</main>
