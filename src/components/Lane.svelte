<script lang="ts">
  import Arithmetic from './Arithmetic.svelte';

  let width: number;
</script>

<div bind:clientWidth={width} class="lane">
  <!-- <TextBar text="わたのはらやそしまかけてこぎいでぬとひとにはつげよあまのつりぶね" /> -->
  <!-- <TextBar text="this is a text string. hello world." /> -->
  <Arithmetic {width} on:message />
</div>

<style>
  .lane {
    box-sizing: border-box;
    border-bottom: 1px dotted;
  }
</style>
