<template>
  <div
    class="flex"
    :class="{
      'gap-4': direction === 'horizontal',
      'flex-col gap-2': direction === 'vertical',
    }"
  >
    <UButton
      :variant="$route.name === 'index' ? 'solid' : 'ghost'"
      icon="i-line-md-file-document"
      :to="{ name: 'index' }"
      @click="$emit('nav')"
      label="Resume"
    />
    <UButton
      :variant="$route.matched.some(r => r.name === 'projects') ? 'solid' : 'ghost'"
      icon="i-line-md-star"
      :to="{ name: 'projects' }"
      @click="$emit('nav')"
      label="Projects"
    />
    <UButton
      variant="ghost"
      icon="i-line-md-email"
      to="mailto:tremorrisdev@gmail.com"
      @click="$emit('nav')"
      label="Email"
    />
    <UButton
      variant="ghost"
      icon="i-line-md-github-loop"
      to="https://github.com/tremorrisdev"
      @click="$emit('nav')"
      label="Github"
    />
    <UButton
      variant="ghost"
      icon="i-line-md-linkedin"
      to="https://www.linkedin.com/in/trevor-a-morris/"
      @click="$emit('nav')"
      label="LinkedIn"
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    direction?: 'vertical' | 'horizontal'
  }>(),
  {
    direction: 'horizontal',
  },
)

defineEmits<{
  nav: []
}>()
</script>
