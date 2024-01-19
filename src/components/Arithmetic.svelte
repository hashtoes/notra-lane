<script lang="ts">
  import { createEventDispatcher, onDestroy } from 'svelte';
  import { charWidth } from '$lib/constants';
  import type { Result } from '$lib/types';
  import { cssString } from '$lib/utils';
  import { generateProblem } from '$lib/arithmetics';
  import { answer, laneId } from '$stores/selected';
  import TextBar from './TextBar.svelte';

  export let id: number;
  export let width: number;

  $: leftMargin = Math.random() * width * 2 + width;
  $: style = cssString({
    'margin-left': `${leftMargin}px`
  });

  const dispatch = createEventDispatcher<Result>();

  const slideSpeed = 1;
  const problem = generateProblem();

  const intervalId = setInterval(() => {
    leftMargin -= slideSpeed;
    if (leftMargin <= -(charWidth * problem.statement.length)) {
      clearInterval(intervalId);
      dispatch('message', 'timeover');
    }
  }, 10);

  const onClick = () => {
    answer.set(problem.answer);
    laneId.set(id);
  };

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div {style} on:click={onClick}>
  <TextBar text={problem.statement} />
</div>
