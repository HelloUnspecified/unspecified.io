<script>
  import Nav from '$components/Nav.svelte';
  import SiteWideFooter from '$components/SiteWideFooter.svelte';
  import '../global.css';
</script>

<div class="font-inter min-h-screen flex flex-col bg-gray-100">
  <!-- <section>
    <Nav />
  </section> -->

  <body class="flex-grow">
    <slot />
  </body>

  <footer class="justify-end">
    <SiteWideFooter />
  </footer>
</div>
