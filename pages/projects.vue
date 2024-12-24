<template>
  <div class="h-full overflow-y-auto">
    <UContainer class="pt-8 flex flex-wrap justify-center gap-8">
      <div
        v-for="(p, idx) in projects"
        :id="`card-${idx}`"
        :key="idx"
        class="h-48 w-80 no-content p-0 m-0 ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg shadow bg-gray-200 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-600 text-black dark:text-white cursor-pointer sm:transition-all sm:hover:scale-110"
        @click="$router.push({ name: 'projects-project', params: { project: p.name }})"
      >
        <div
          class="transition-opacity duration-[1500ms] opacity-100 h-full w-full flex items-center justify-center relative ring-gray-800 select-none"
        >
          <div
            class="bg-cover blur-[1px] top-0 left-0 bottom-0 right-0 h-full overflow-hidden absolute opacity-40 bg-local"
            :class="p.bg"
          ></div>
          <p class="font-bold z-10 sm:z-20">
            {{ p.name }}
          </p>
          <UModal :model-value="$route.params.project === p.name" :fullscreen="!breakpoints.sm.value">
            <NuxtPage />
          </UModal>
        </div>
      </div>
    </UContainer>
    <br />
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';

const { projects } = useProjects()

onMounted(() => {
  for (const [idx, _] of projects.entries()) {
    setTimeout(
      () =>
        document
          .getElementById(`card-${idx}`)
          ?.classList.replace('no-content', 'card'),
      300 + 0.1 * idx * 300
    )
  }
})

const breakpoints = useBreakpoints(breakpointsTailwind)
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .mobile-dvh {
    @media (max-width: 639px) {
      height: 100dvh !important;
    }
  }

  .no-content * {
    opacity: 0;
  }
}

.card {
  animation: rotate 500ms ease-in-out;
  -webkit-transform: translate3d(0,0,0)
}

@keyframes rotate {
  from {
    transform: rotateY(0.5turn);

  }
  to {
    transform: rotateY(0turn);

  }
}

div[data-headlessui-state=open] {
  @apply mobile-dvh
}
</style>
