<script>
  import colors from "../../utils/colors";
  import Icon from "../Icon.svelte";

  $: footerStyle = `
    width: 100vw;
    color: ${colors.white};
    height: 6rem;
    padding: 1rem;
    background-color: ${colors.secondary};
    position: fixed;
    bottom: 0;
    text-align: center;
  `;

  $: iconStyle = `
    width: 2rem;
    height: 100%;
    margin: 0.5rem 0.5rem;
    fill: ${colors.highlight};
  `;
</script>

<style>
  footer {
    position: fixed;
  }

  footer ul.socials li {
    display: inline;
  }
</style>

<footer style={footerStyle}>
  I'm on a phone YO!
  <ul class="socials">
    <li><Icon title="instagram" styles={iconStyle}/></li>
    <li><Icon title="github" styles={iconStyle} /></li>
    <li><Icon title="linkedIn" styles={iconStyle} /></li>
    <li><Icon title="twitter" styles={iconStyle} /></li>
  </ul>
  
</footer>