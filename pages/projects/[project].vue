<template>
  <UCard class="h-full sm:h-auto">
    <template #header>
      <div class="flex items-center justify-between">
        <p class="text-2xl font-bold">{{ current?.name }}</p>
        <UButton
          icon="i-line-md-close"
          variant="link"
          @click="$router.back()"
        />
      </div>
      <p class="text-sm opacity-70">{{ current?.subtitle }}</p>
    </template>
    <div class="flex w-full mb-4 justify-center">
      <UBadge v-for="t in current?.stack" :label="t" variant="subtle" class="mx-2"/>
    </div>
    <UCarousel
      ref="carouselRef"
      #default="{ item }"
      :items="current?.img"
      class="w-full"
      indicators
      :ui="{ item: 'basis-full' }"
    >
      <img :src="item" />
    </UCarousel>
    <p class="mt-4">
      {{ current?.description }}
    </p>
  </UCard>
</template>

<script setup lang="ts">
const { current } = useProjects()

const carouselRef = ref()
onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>
