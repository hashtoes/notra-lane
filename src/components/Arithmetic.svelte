<script lang="ts">
  import { page } from '$app/stores';
  import { onDestroy } from 'svelte';
  import { charWidth } from '$lib/constants';
  import type { Result } from '$lib/types';
  import { cssString } from '$lib/utils';
  import { generateProblem } from '$lib/arithmetics';
  import { answer, laneId } from '$stores/selected';
  import TextBar from './TextBar.svelte';

  let {
    id,
    width,
    onmessage
  }: { id: number; width: number; onmessage?: (msg: Result['message']) => void } = $props();

  let leftMargin = $state(0);
  let initialized = false;

  $effect(() => {
    if (width > 0 && !initialized) {
      leftMargin = Math.random() * width * 2 + width;
      initialized = true;
    }
  });

  let style = $derived(
    cssString({
      'padding-left': `${leftMargin >= 0 ? leftMargin : 0}px`,
      'margin-left': `${leftMargin < 0 ? leftMargin : 0}px`
    })
  );

  const slideSpeed = 1;
  const slideInterval = (() => {
    const baseInterval = Number($page.url.searchParams.get('int')) || 15;
    return baseInterval + baseInterval * 0.8 * (Math.random() - 0.5);
  })();
  const problem = generateProblem();

  const intervalId = setInterval(() => {
    if (!initialized) return;
    leftMargin -= slideSpeed;
    if (leftMargin <= -(charWidth * problem.statement.length)) {
      clearInterval(intervalId);
      onmessage?.('timeover');
    }
  }, slideInterval);

  const onclick = () => {
    answer.set(problem.answer);
    laneId.set(id);
  };

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="arith" {style} {onclick}>
  <TextBar text={problem.statement} />
</div>

<style>
  .arith {
    height: 48px;
    line-height: 48px;
  }
</style>
