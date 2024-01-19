<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { charWidth } from '$lib/constants';
  import type { Result } from '$lib/types';
  import { cssString } from '$lib/utils';
  import { generateProblem } from '$lib/arithmetics';
  import { answer } from '$stores/problem';
  import TextBar from './TextBar.svelte';

  export let width: number;

  $: leftMargin = Math.random() * width * 2 + width;

  const dispatch = createEventDispatcher<Result>();

  const slideSpeed = 1;
  const problem = generateProblem();

  $: style = cssString({
    'margin-left': `${leftMargin}px`
  });

  const intervalId = setInterval(() => {
    leftMargin -= slideSpeed;
    if (leftMargin <= -(charWidth * problem.statement.length)) {
      clearInterval(intervalId);
      dispatch('message', 'timeover');
    }
  }, 10);

  const onClick = () => {
    answer.set(problem.answer);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div {style} on:click={onClick}>
  <TextBar text={problem.statement} />
</div>
