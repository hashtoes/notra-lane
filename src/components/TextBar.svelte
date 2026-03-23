<script lang="ts">
  import CharBox from './CharBox.svelte';

  let { text }: { text: string } = $props();
</script>

<div class="text-bar">
  {#each text as character, idx (idx)}
    <CharBox {character} />
  {/each}
</div>

<style>
  .text-bar {
    display: flex;
  }
</style>
