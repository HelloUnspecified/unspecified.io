<script>
  import ApolloClient from "apollo-boost";
  import { setClient } from "svelte-apollo";

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
