<script lang="ts">
  export let char = '';
</script>

<div class="button" on:click>{char}</div>

<style>
  .button {
    margin: 2px;
    border: solid 1px;
    background-color: #efefef;
    width: 70px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
</style>
