<script>
  import { Title } from '$elements';
  import { Layouts } from '$elements';

  const services = [
    {
      title: 'Product Development/Delivery',
      description:
        "From idea to creation, through launch. We've built and deployed products that services millions of users.",
    },
    {
      title: 'Speaking/Training',
      description:
        'Delivering anything from deep level technical know-how to how, as business owners, we design and build software, we bring amazing content across the United States.',
    },
    {
      title: 'Architecture Design',
      description:
        'We take your business needs, budget, future goals and design out a maintainable solution to support all your goals. Awesome performance. Automation. Black leather gloves.',
    },
    {
      title: 'Team Development + Leadership',
      description:
        'Help you build and lead the of the exact talent and expertise to drive your goals.',
    },
  ];
</script>

<Layouts.Inside>
  <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
    <div class="lg:col-span-1">
      <Title
        ><span class="text-u-red">Call today. We're here to help!</span></Title>
    </div>
    <dl
      class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
      {#each services as service}
        <div
          class="p-6 bg-u-navy text-white rounded-tr-3xl rounded-bl-3xl shadow-xl transition duration-500 ease-in-out transform hover:scale-105 hover:-rotate-3">
          <dt>
            <p class="text-lg leading-6 font-bold text-u-gold">
              {service.title}
            </p>
          </dt>
          <dd class="mt-2 text-base">
            {service.description}
          </dd>
        </div>
      {/each}
    </dl>
  </div>
</Layouts.Inside>
