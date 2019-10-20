<script>
  import ApolloClient from "apollo-boost";
  import { onMount } from 'svelte';
  import Media from "../utils/Media.svelte";
  import { screenSizes } from "../utils/mediaQuery";
  import { setClient } from "svelte-apollo";

  import Footer from "../components/Footer/Footer.svelte";
  import MobileFooter from "../components/Footer/MobileFooter.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;

  const client = new ApolloClient({
    uri: "https://sandbarandislandgrill.components/api"
  });
  

  let screenSize = "";
  setClient(client);

  onMount(async () => {
    const resized = () => {
      let width = window.innerWidth;

      Object.keys(screenSizes.screens).find((screen) => {
        if(width >= screenSizes.screens[screen].min && width <= screenSizes.screens[screen].max) { 
          screenSize = screen;
        };
      });
      ;
    }

    resized();
    window.addEventListener('resize', resized);
  })
  
</script>

<style>
  main {
    position: relative;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }

  main.xsmall {
    padding-bottom: 8rem;
  }
</style>

<Nav {segment} />

<main class={screenSize}>
  <slot />
</main>

<!-- Need this so that we don't get an error when loading Media as it needs window -->
{#if process.browser}
  <Media query="xsmall" let:matches>
    {#if matches}
      <Footer />
    {:else}
      <MobileFooter />
    {/if}
  </Media>
{/if}

