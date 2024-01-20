<script lang="ts">
  import Arithmetic from './Arithmetic.svelte';

  export let id: number;
  export let empty: boolean = false;

  let width: number;
</script>

<div bind:clientWidth={width} class="lane">
  {#if !empty}
  <!-- <TextBar text="わたのはらやそしまかけてこぎいでぬとひとにはつげよあまのつりぶね" /> -->
  <!-- <TextBar text="this is a text string. hello world." /> -->
  <Arithmetic {id} {width} on:message />
  {/if}
</div>

<style>
  .lane {
    box-sizing: border-box;
    border-bottom: 1px dotted;
    height: 48px;
  }
</style>
