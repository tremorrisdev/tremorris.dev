<template>
  <UModal
    :default-open="!!$route.params.project"
    :fullscreen="!breakpoints.sm.value"
    :description="current?.subtitle"
    :ui="{
      body: 'sm:max-h-[700px]',
    }"
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
        :autoplay="{
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }"
        class="w-full mb-12"
        class-names
        loop
        dots
        :items="current.img"
        :ui="{
          item: `${current.img.length > 1 ? 'basis-[80%]' : ''} transition-opacity [&:not(.is-snapped)]:opacity-10`,
        }"
      >
        <img :src="item" />
      </UCarousel>
      <UProgress v-if="isLoading" class="mx-auto w-2/3" />
      <ContentRenderer
        v-else-if="md"
        :value="md"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { ContentCollectionItem } from '@nuxt/content'

const breakpoints = useBreakpoints(breakpointsTailwind)
const { current } = useProjects()

const router = useRouter()
watch(useTemplateRef('card-root'), (val) => {
  if (!val) router.back()
})

const isLoading = ref(true)
const md = ref<ContentCollectionItem | null>(null)
watch(
  current,
  (val) => {
    if (!val) {
      md.value = null
      isLoading.value = false
    } else {
      isLoading.value = true
      queryCollection('content')
        .path(`/${val.name.replace(/\s/g, '').toLowerCase()}`)
        .first()
        .then((data) => (md.value = data))
        .finally(() => (isLoading.value = false))
    }
  },
  {
    immediate: true,
  },
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

:deep(h2) {
  @apply text-xl mb-2;
}

:deep(ol),
:deep(ul) {
  @apply mt-2;
}

:deep(ol) {
  @apply list-decimal ml-8;
}

:deep(ul) {
  @apply ml-4;
}

:deep(li) {
  @apply my-2;
}

:deep(input[type='checkbox']) {
  @apply mr-1;
}
</style>
