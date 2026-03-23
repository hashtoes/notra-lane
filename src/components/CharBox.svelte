<script lang="ts">
  import { charWidth } from '$lib/constants';
  import { cssString } from '$lib/utils';

  let { character }: { character: string } = $props();

  const style = cssString({
    width: `${charWidth}px`
  });
</script>

<div class="char-box" {style}>{character}</div>

<style>
  .char-box {
    flex-shrink: 0;
    text-align: center;
  }
</style>
