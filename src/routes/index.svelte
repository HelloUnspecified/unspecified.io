<script>
  import LetsChat from '$components/root/_LetsChat.svelte';
  import OurTeam from '$components/root/_OurTeam.svelte';
  import BlogHighlights from '$components/root/_BlogHighlights.svelte';
  import LogoCloud from '$components/root/_LogoCloud.svelte';
  import Hero from '$components/root/_Hero.svelte';
  import Services from '$components/root/_Services.svelte';
  import Contact from '$components/root/_Contact.svelte';
  import CTA from '$components/root/_Mission.svelte';
</script>

<div>
  <header class="bg-u-navy">
    <Hero />
  </header>

  <section>
    <LetsChat />
  </section>

  <section>
    <CTA />
  </section>

  <section>
    <OurTeam />
  </section>

  <section>
    <Services />
  </section>

  <section>
    <LogoCloud />
  </section>

  <section>
    <BlogHighlights />
  </section>

  <section>
    <Contact />
  </section>
</div>
