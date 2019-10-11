<script context="module">
  import ApolloClient, { gql } from "apollo-boost";
  import fetch from "isomorphic-unfetch";

  const client = new ApolloClient({
    uri: "https://sandbarandislandgrill.com/api"
  });

  // const variables = {
  //   eventId: "htFi118GD1fGFYdI6Jep"
  // };

  const EVERYTHING = gql`
    {
      menu {
        name
      }
      drinks {
        name
      }
    }
  `;

  export async function preload() {
    return {
      cache: await client.query({
        query: EVERYTHING
        // variables
        // fetchOptions: {
        //   mode: "no-cors"
        // }
      })
    };
  }
</script>

<script>
  import Drinks from "./Drinks.svelte";
  import { setClient, restore, query } from "svelte-apollo";

  const GET_LESS = gql`
    {
      menu {
        name
      }
    }
  `;

  export let cache;
  restore(client, EVERYTHING, cache.data);
  setClient(client);

  // query a subset of the preloaded (the rest if for Account)
  const menu = query(client, { query: GET_LESS });
</script>

<!-- routes/settings.html -->
{#await $menu}
  Loading won't be shown if preloaded
{:then result}
  <h1>Menu</h1>
  <ol>
    {#each result.data.menu as m}
      <li>{m.name}</li>
    {/each}
  </ol>
{/await}

<Drinks />
