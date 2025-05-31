<template>
  <UContainer class="flex flex-wrap justify-center gap-8">
    <div
      v-for="(p, idx) in projects"
      :id="`card-${idx}`"
      :key="idx"
      class="h-48 w-80 p-0 m-0 ring-1 ring-accented rounded-lg cursor-pointer transition-all hover:scale-110 duration-300 opacity-0"
      @click="
        () => $router.push({ name: 'projects-project', params: { project: p.name } })
      "
    >
      <div
        class="h-full w-full flex items-center justify-center relative select-none"
      >
        <div
          class="bg-cover blur-[2px] top-0 left-0 bottom-0 right-0 h-full overflow-hidden absolute opacity-40 bg-local"
          :class="p.bg"
        ></div>
        <p
          :id="`card__name-${idx}`"
          class="font-bold z-10 sm:z-20 transition-opacity opacity-0"
        >
          {{ p.name }}
        </p>
      </div>
    </div>
    <NuxtPage />
  </UContainer>
</template>

<script setup lang="ts">
const { projects } = useProjects()

onMounted(() => {
  for (const [idx, _] of projects.entries()) {
    setTimeout(
      () =>
        document
          .getElementById(`card-${idx}`)
          ?.classList.replace('opacity-0', 'card'),
      0.1 * idx * 500,
    )

    setTimeout(
      () =>
        document
          .getElementById(`card__name-${idx}`)
          ?.classList.replace('opacity-0', 'opacity-100'),
      300 + 0.1 * idx * 500,
    )
  }
})
</script>

<style>
.card {
  animation: rotate 500ms ease-in-out;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
}

@keyframes rotate {
  from {
    transform: rotateY(0.5turn);
  }
  to {
    transform: rotateY(0turn);
  }
}
</style>
