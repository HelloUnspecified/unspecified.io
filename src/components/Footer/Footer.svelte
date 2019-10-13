<script>
  import colors from "../../utils/colors";
  import Icon from "../Icon.svelte";

  $: footerStyle = `
    color: ${colors.white};
    height: 8rem;
    padding: 1rem;
    background-color: ${colors.primary};
  `;

  $: iconStyle = `
    color: ${colors.white};
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
    <li><Icon title="instagram" className="footer-social" color="white"/></li>
    <li><Icon title="github" className="footer-social" color="white" /></li>
    <li><Icon title="linkedIn" className="footer-social" color="white" /></li>
    <li><Icon title="twitter" className="footer-social" color="white" /></li>
  </ul>
  
</footer>