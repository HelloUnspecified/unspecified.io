<script>
  import svgs from "../utils/svgs";

  export let title;
  export let height;
  export let width;
  export let className;
  export let styles;

  let iconHeight = height || "24";
  let iconWidth = width || "24";
  let iconTitle = title;
  let iconPaths = svgs[title].paths;
</script>

<svg
  class={className}
  style={styles}
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox={`0 0 ${iconHeight} ${iconWidth || '24'}`}>
  <title>{iconTitle}</title>
  {#each iconPaths as path}
    <path d={path} />
  {/each}
</svg>
