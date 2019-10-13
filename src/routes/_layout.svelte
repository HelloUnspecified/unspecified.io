<script>
  import ApolloClient from "apollo-boost";
  import { onMount } from 'svelte';
  import Media from "../utils/Media.svelte";
  import { setClient } from "svelte-apollo";

  import Footer from "../components/Footer/Footer.svelte";
  import MobileFooter from "../components/Footer/MobileFooter.svelte";
  import Nav from "../components/Nav.svelte";
  export let segment;

  const client = new ApolloClient({
    uri: "https://sandbarandislandgrill.components/api"
  });
  setClient(client);
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
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

