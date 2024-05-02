<script lang="ts">
  import { page } from '$app/stores';
  import Lane from '$components/Lane.svelte';
  import Input from '$components/Input.svelte';
  import { answer, laneId } from '$stores/selected';
  import type { Result } from '$lib/types';
  import { tick } from 'svelte';

  let numLanes = Number($page.url.searchParams.get('num')) || 3;

  let empties = Array<boolean>(numLanes).fill(false);
  let showingInput = true;

  const onMessage = (result: Result['message'], index: number) => {
    if (result !== 'correct') {
      alert(result);
      empties = Array<boolean>(numLanes).fill(true);
      showingInput = false; // Reset the input value once
      tick().then(() => {
        empties = Array<boolean>(numLanes).fill(false);
        showingInput = true;
      });
      return;
    }
    empties[index] = true;
    tick().then(() => {
      empties[index] = false;
    });
  };
</script>

<div class="full-height">
  <div class="lane-pane">
    {#each empties as empty, idx}
      <Lane id={idx} {empty} on:message={(e) => onMessage(e.detail, idx)} />
    {/each}
  </div>
  <div class="input-pane">
    {#if showingInput}
      <Input answer={$answer} on:message={(e) => onMessage(e.detail, $laneId)} />
    {/if}
  </div>
</div>

<style>
  .full-height {
    height: 100vh;
    user-select: none;
  }
  .lane-pane {
    max-height: 80vh;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .input-pane {
    height: 20vh;
    border-top: 1px solid;
    box-sizing: border-box;
  }
</style>
