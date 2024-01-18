<script lang="ts">
  import CharBox from "./CharBox.svelte";

  export let text: string;
</script>

<div class="text-bar">
  {#each text as character}
  <CharBox {character} />
  {/each}
</div>

<style>
  .text-bar {
    display: flex;
  }
</style>