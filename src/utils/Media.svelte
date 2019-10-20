<script>
  export let query;
  let matches;
  let mediaQueryList;

  const size = {
    xsmall: 400,
    small: 720,
    med: 960,
    large: 1140,
  };

  function handleChange(e) {
    matches = mediaQueryList.matches;
  }

  $: {
    if (mediaQueryList) mediaQueryList.removeListener(handleChange);
    mediaQueryList = window.matchMedia("(min-width: " + size[query] + "px)");
    mediaQueryList.addListener(handleChange);

    handleChange(mediaQueryList);
  }
</script>

<slot {matches}>
</slot>