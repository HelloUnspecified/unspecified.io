<script>
  import { gql } from "apollo-boost";
  import { getClient, query } from "svelte-apollo";

  const client = getClient();

  const GET_LESS = gql`
    {
      drinks {
        name
      }
    }
  `;

  const drinks = query(client, { query: GET_LESS });
</script>

{#await $drinks}
  Loading won't be shown if preloaded
{:then result}
  <h1>Drinks</h1>
  <ol>
    {#each result.data.drinks as m}
      <li>{m.name}</li>
    {/each}
  </ol>
{/await}
