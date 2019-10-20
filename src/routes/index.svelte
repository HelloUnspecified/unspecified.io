<script>
  import colors from "../utils/colors";
  import { onMount } from 'svelte';
  import ContentHighlight from "../components/ContentHighlight.svelte";

	$: headerStyle = `
    color: ${colors.secondary};
  `;

  $: logoLineStyle = `
    background-color: ${colors.tertiary};
  `;

  $: verticalStyle = `
    color: ${colors.white};
  `;

  onMount(async () => {
    setTimeout(function(){
      document.getElementsByClassName("logo_top_line left")[0].style.width = "33rem";
      document.getElementsByClassName("logo_top_line right")[0].style.width = "calc(100% - 21rem)";
    }, 500);
  });
</script>

<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 5em;
    text-transform: lowercase;
    font-family: 'Montserrat Black', sans-serif;
    font-weight: 700;
    margin: 0 0 0.5em 0;
    position: fixed;
    top: 1rem;
    left: 2rem;
  }

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 0;
  }

  p {
    margin: 1em auto;
  }

  .logo {
    width: 50rem;
  }

  .logo_top_line {
    height: 3px;
    width: 0;
    position: fixed;
    transition: 2s ease-in-out;
  }

  .logo_top_line.left {
    top: 2.8rem;
    left: 0;
  }

  .logo_top_line.right {
    top: 10rem;
    right: 0;
  }

  #content_highlights {
    display: flex;
    width: 40vw;
    position: absolute;
    bottom: 3rem;
    left: 3rem;
  }

  #sectionGuide {
    position: fixed;
    right: 1.6rem;
    bottom: 30rem;
    display: flex;
    flex-direction: column;
  }

  #current_block {
    border-bottom: 2px solid white;
  }

  #scrollGuide {
    position: fixed;
    right: -6.8rem;
    bottom: 26rem; 
    transform-origin: 0 0;
    transform: rotate(90deg);
  }

  .icono-arrow2-right-down {
    width: 0;
    height: 5rem;
    border-width: 0.08rem;
    border-style: solid;
    margin: 10px;
    position: fixed;
    right: 1.4rem;
    color: white;
    bottom: 12rem;
  }

  .icono-arrow2-right-down:after {
    content: '';
    position: absolute;
    left: -0.5rem;
    top: 5rem;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 1rem solid white;
    clear: both;

}
</style>

<svelte:head>
  <title>Unspecified</title>
</svelte:head>

<div class="logo">
  <span class="logo_top_line left" style={logoLineStyle}/>
  <h1 style={headerStyle}>unspecified</h1>
  <span class="logo_top_line right" style={logoLineStyle}/>
</div>

<div>
  <img alt="Clark Sell" src="clark-on-stage.jpg" />
  <div id="content_highlights">
    <ContentHighlight />
    <ContentHighlight />
  </div>
</div>

<div id="sectionGuide" style={verticalStyle}>
  <span id="current_block">01</span>
  <span id="total_blocks">06</span>
</div>

<div id="scrollGuide" style={verticalStyle}>
  <span>Learn More</span>
</div>

<i class="icono-arrow2-right-down"></i>