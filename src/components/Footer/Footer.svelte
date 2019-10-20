<script>
  import colors from "../../utils/colors";
  import Icon from "../Icon.svelte";

  $: footerStyle = `
    color: ${colors.white};
    height: 8rem;
    background-color: ${colors.primary};
    width: 100vw;
  `;

  $: iconStyle = `
    width: 2rem;
    height: 100%;
    margin: 0.5rem 0.5rem;
    fill: ${colors.white};
  `;
</script>

<style>
  footer ul.socials li {
    display: inline;
  }
</style>

<footer style={footerStyle}>
  CLARK! Let's GOOOOO! 
  <ul class="socials">
    <li><Icon title="instagram" styles={iconStyle}/></li>
    <li><Icon title="github" styles={iconStyle} /></li>
    <li><Icon title="linkedIn" styles={iconStyle} /></li>
    <li><Icon title="twitter" styles={iconStyle} /></li>
  </ul>
  
</footer>