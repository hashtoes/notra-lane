<script lang="ts">
  import Hello from '$components/Hello.svelte';
	let numLanes = 28;
</script>

<div class="full-height">
  <div class="lane-pane">
    {#each Array(numLanes).fill(0) as idx}
      <Hello />
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
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .input-pane {
    height: 20vh;
    border-top: 1px solid;
    box-sizing: border-box;
  }
</style>
