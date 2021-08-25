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
  <div class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="relative max-w-7xl mx-auto ">
      <nav>
        <div
          class="max-w-2xl lg:max-w-none mx-auto grid gap-5 grid-cols-2 lg:grid-cols-4">
          {#each links as link}
            <div
              class="flex flex-col font-head font-extrabold text-3xl text-u-red uppercase tracking-wider">
              <div class="">
                <a href="{link.href}">
                  <div
                    class="inline-flex justify-center w-full border-8 border-u-gold hover:text-u-gold hover:border-u-red transition duration-500 ease-in-out transform hover:-rotate-3 rounded-tr-3xl rounded-bl-3xl shadow-xl px-6 py-8 md:p-10 bg-u-navy">
                    <div class="border-transparent px-1 pt-1 border-b-2">
                      {link.title}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          {/each}
        </div>
      </nav>
    </div>
  </div>
</div>

<!-- <div
    class="max-w-md sm:max-w-3xl lg:max-w-7xl mx-auto px-4 sm:py-24 sm:px-6 lg:px-8"> -->

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
