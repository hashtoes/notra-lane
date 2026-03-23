<script lang="ts">
  let { char = '', onclick }: { char?: string; onclick?: () => void } = $props();
</script>

<button class="button" {onclick}>{char}</button>

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
