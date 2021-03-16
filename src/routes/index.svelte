<script>
  import LetsChat from '$components/root/LetsChat.svelte';
  import OurTeam from '$components/root/OurTeam.svelte';
  import BlogHighlights from '$components/root/BlogHighlights.svelte';
  import LogoCloud from '$components/root/LogoCloud.svelte';
  import Hero from '$components/root/Hero.svelte';
  import Services from '$components/root/Services.svelte';
  import Contact from '$components/root/Contact.svelte';
  import CTA from '$components/root/Mission.svelte';
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
