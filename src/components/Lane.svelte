<script lang="ts">
  import Arithmetic from './Arithmetic.svelte';
  import { laneId } from '$stores/selected';
  import type { Result } from '$lib/types';

  let {
    id,
    empty = false,
    onmessage
  }: { id: number; empty?: boolean; onmessage?: (msg: Result['message']) => void } = $props();

  let width = $state(0);

  let classNames = $derived(id === $laneId ? 'lane selected' : 'lane');
</script>

<div bind:clientWidth={width} class={classNames}>
  {#if !empty}
    <Arithmetic {id} {width} {onmessage} />
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
