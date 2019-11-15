<script>
  import colors from "../utils/colors";

  export let segment;
  export let navOpen;

  $: linkStyle = `
    color: ${colors.white};
	`;

  $: hamburderStyle = `
    background: ${colors.white};
  `;
</script>

<style>
  nav {
    /* border-bottom: 1px solid rgba(255,62,0,0.1); */
    font-weight: 300;
    /* position: fixed; */
    top: 6rem;
    z-index: 10;
    width: 99vw;
    display: flex;
    justify-content: flex-end;
    margin-right: 2rem;
  }

  .selected {
    font-weight: 800;
  }

  a {
    text-decoration: none;
    padding: 0 1em;
    display: block;
  }

  #hamburger {
    width: 3.3rem;
    height: 45px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  #hamburger span {
    display: block;
    position: absolute;
    height: 0.35rem;
    width: 100%;
    border-radius: 0.5rem;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #hamburger span:nth-child(1) {
    top: 0px;
  }

  #hamburger span:nth-child(2),
  #hamburger span:nth-child(3) {
    top: 1rem;
  }

  #hamburger span:nth-child(4) {
    top: 2rem;
  }

  #hamburger.open span:nth-child(1) {
    top: 1rem;
    width: 0%;
    left: 50%;
  }

  #hamburger.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #hamburger.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #hamburger.open span:nth-child(4) {
    top: 1rem;
    width: 0%;
    left: 50%;
  }
</style>

<nav>
  <a class={segment === undefined ? 'selected' : ''} href="." style={linkStyle}>
    who we are
  </a>
  <a
    class={segment === 'about' ? 'selected' : ''}
    href="about"
    style={linkStyle}>
    what we do
  </a>

  <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
  <a
    rel="prefetch"
    class={segment === 'blog' ? 'selected' : ''}
    href="blog"
    style={linkStyle}>
    what we believe
  </a>

  <div
    id="hamburger"
    class:open={navOpen}
    on:click={() => (navOpen = !navOpen)}>
    <span style={hamburderStyle} />
    <span style={hamburderStyle} />
    <span style={hamburderStyle} />
    <span style={hamburderStyle} />
  </div>
</nav>
