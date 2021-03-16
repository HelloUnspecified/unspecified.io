<script>
  const links = [
    {
      title: 'Services',
      href: '',
    },
    {
      title: 'Writings',
      href: '#blogSection',
    },
    {
      title: 'About',
      href: '',
    },
    {
      title: 'Contact',
      href: '',
    },
  ];
</script>

<div class="bg-u-tan">
  <div class="max-w-7xl mx-auto px-4 sm:py-24 sm:px-6 lg:px-8">
    <nav class="">
      <div class="flex justify-center">
        <div
          class="hidden sm:ml-6 sm:flex sm:space-x-8 font-head font-extrabold text-4xl text-u-red uppercase tracking-wider">
          {#each links as link}
            <a href="{link.href}">
              <div
                class="border-8 border-u-gold hover:text-u-gold hover:border-u-red transition duration-500 ease-in-out transform hover:-rotate-3 rounded-tr-3xl rounded-bl-3xl shadow-xl px-6 py-8 md:p-10 bg-u-navy">
                <div
                  class="border-transparent inline-flex items-center px-1 pt-1 border-b-2">
                  {link.title}
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </nav>

    <!-- <div class="pt-12 text-center">
      <p
        class="font-head font-extrabold mt-1 text-4xl text-u-navy sm:text-5xl sm:tracking-tight lg:text-6xl">
        Let's Chat!
      </p>
      <p class="max-w-7xl mt-5 mx-auto text-xl text-gray-500">
        Greetings, questions, conversations... you name it, we'd love to hear
        from you!
      </p>
      <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
        Message us directly at (312) 273-4442
      </p>
    </div> -->
  </div>
</div>
