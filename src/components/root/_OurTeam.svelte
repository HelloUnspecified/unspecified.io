<script>
  import { fade } from 'svelte/transition';

  import { Title } from '$elements';
  import TeamMember from './components/OurTeam/_TeamMember.svelte';

  const persons = [1, 2];
</script>

<div>
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      <div class="space-y-5 sm:space-y-4">
        <Title>
          <span class="text-u-red">Our Team</span>
        </Title>

        <p class="text-xl text-gray-500">
          Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue
          ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu
          faucibus vivamus eget bibendum cras.
        </p>
      </div>
      <div class="lg:col-span-2">
        <ul
          class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
          {#each persons as person, index}
            <li in:fade="{{ delay: index * 600 }}">
              <TeamMember />
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
