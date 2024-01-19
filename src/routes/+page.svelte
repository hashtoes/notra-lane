<script lang="ts">
  import Lane from '$components/Lane.svelte';
  import Input from '$components/Input.svelte';
  import { answer } from '$stores/problem';
  import type { Result } from '$lib/types';

  let numLanes = 3;
  let gameOver = false;

  const onMessage = (e: CustomEvent<Result['message']>) => {
    if (!gameOver && e.detail !== 'correct') {
      gameOver = true;
      alert(e.detail);
    }
  };
</script>

<div class="full-height">
  <div class="lane-pane">
    {#each Array(numLanes).fill(0) as idx}
      <Lane on:message={onMessage} />
    {/each}
  </div>
  <div class="input-pane">
    <Input answer={$answer} on:message={onMessage} />
  </div>
</div>

<style>
  .full-height {
    height: 100vh;
  }
  .lane-pane {
    height: 80vh;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .input-pane {
    height: 20vh;
    border-top: 1px solid;
    box-sizing: border-box;
  }
</style>
