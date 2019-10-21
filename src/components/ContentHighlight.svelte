<script>
  import colors from "../utils/colors";

  $: blockStyle = `
    background-color: ${colors.white};
  `;
</script>

<style>
  .content_highlight {
    width: 23rem;
    height: 30rem;
    margin: 0 1rem;
  }
</style>

<div class="content_highlight" style={blockStyle}>
</div>