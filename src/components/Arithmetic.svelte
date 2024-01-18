<script lang="ts">
	import { cssString } from "$lib/utils";
	import { generateProblem } from "$lib/arithmetics";
  import TextBar from "./TextBar.svelte";

  const problem = generateProblem().problem;
  let leftMargin = 100; // vw

  $: style = cssString({
    'margin-left': `${leftMargin}vw`
  });

  const intervalId = setInterval(() => {
    leftMargin -= 1;
    if (leftMargin <= -100) {
      clearInterval(intervalId);
    }
  }, 20);
</script>

<div class="lane" {style}>
  <!-- <TextBar text="わたのはらやそしまかけてこぎいでぬとひとにはつげよあまのつりぶね" /> -->
  <!-- <TextBar text="this is a text string. hello world." /> -->
  <TextBar text={problem} />
</div>

<style>
  .lane {
    box-sizing: border-box;
    border-top: 1px dotted;
  }
</style>