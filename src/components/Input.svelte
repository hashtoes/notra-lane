<script lang="ts">
  import Button from '$components/Button.svelte';
  import type { Result } from '$lib/types';

  let { answer, onmessage }: { answer: number; onmessage?: (msg: Result['message']) => void } =
    $props();
  let accVal = $state(0);

  const onClick = (val: number) => {
    accVal = accVal === 0 ? val : accVal * 10 + val;
    if (accVal === answer) {
      accVal = 0;
      onmessage?.('correct');
      return;
    }

    if (Math.floor(answer / 10) === accVal) {
      return;
    }

    accVal = 0;
    onmessage?.('wrong');
  };
</script>

<div class="input">
  {#each Array(10).fill(0) as _, val (val)}
    <Button char={`${val}`} onclick={() => onClick(val)} />
  {/each}
</div>

<style>
  .input {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
  }
</style>
