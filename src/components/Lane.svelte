<script lang="ts">
  import Arithmetic from './Arithmetic.svelte';
  import { laneId } from '$stores/selected';

  export let id: number;
  export let empty: boolean = false;

  let width: number;

  $: classNames = (id === $laneId) ? "lane selected" : "lane";
</script>

<div bind:clientWidth={width} class="{classNames}">
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
  .selected {
    background-color: #ececec;
  }
</style>
