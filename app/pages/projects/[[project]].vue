<template>
  <UModal
    :default-open="!!$route.params.project"
    :fullscreen="!breakpoints.sm.value"
    :description="current?.subtitle"
  >
    <template #title>
      <p ref="card-root">{{ current?.name }}</p>
    </template>
    <template #body>
        <div class="flex w-full mb-4 justify-center">
          <UBadge
            v-for="t in current?.stack"
            :label="t"
            variant="subtle"
            class="mx-2"
          />
        </div>
        <UCarousel
          v-if="current"
          #default="{ item }"
          :autoplay="{ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }"
          class="w-full mb-12"
          class-names
          loop
          dots
          :items="current.img"
          :ui="{
            item: 'basis-[80%] transition-opacity [&:not(.is-snapped)]:opacity-10'
          }"
        >
          <img :src="item" />
        </UCarousel>
        <p>
          {{ current?.description }}
        </p>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const { current } = useProjects()

const router = useRouter()
watch(useTemplateRef('card-root'), (val) => {
  if (!val) router.back()
})
</script>
