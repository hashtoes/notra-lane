<script lang="ts">
	let numLanes = 28;
</script>

<div class="full-height">
  <div class="lane-pane">
    {#each Array(numLanes).fill(0) as idx}
      <div>hello</div>
    {/each}
  </div>
  <div class="input-pane"></div>
</div>

<style>
	.full-height {
		height: 100vh;
	}
  .lane-pane {
    height: 80vh;
    overflow-y: scroll;
  }
  .input-pane {
    height: 20vh;
    border-top: 1px solid;
    box-sizing: border-box;
  }
</style>
