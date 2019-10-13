<script>
  import colors from "../utils/colors";
  import svgs from "../utils/svgs";

  export let title;
  export let height;
  export let width;
  export let className;
  export let color;

  let iconHeight = height || "24";
  let iconWidth = width || "24";
  let iconTitle = title;
  let iconPaths = svgs[title].paths;

  $: iconColor = `
    fill: ${colors[color]};
  `;
</script>

<style>
  .footer-social {
    width: 2rem;
    height: 100%;
    margin: 0.5rem 0.5rem;
  }
</style>

<svg
  class={className}
  style={iconColor}
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox={`0 0 ${iconHeight} ${iconWidth || '24'}`}
>
  <title>{iconTitle}</title>
  {#each iconPaths as path}
    <path d={path} />
  {/each}
</svg>