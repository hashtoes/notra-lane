<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '$components/Button.svelte';
  import type { Result } from '$lib/types';

  const dispatch = createEventDispatcher<Result>();

  export let answer: number;
  let accVal = 0;

  const onClick = (val: number) => {
    accVal = accVal === 0 ? val : accVal * 10 + val;
    if (accVal === answer) {
      accVal = 0;
      dispatch('message', 'correct');
      return;
    }

    if (Math.floor(answer / 10) === accVal) {
      return;
    }

    accVal = 0;
    dispatch('message', 'wrong');
  };
</script>

<div class="input">
  {#each Array(10).fill(0) as _, val}
    <Button char={`${val}`} on:click={() => onClick(val)} />
  {/each}
</div>

<style>
  .input {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
  }
</style>
