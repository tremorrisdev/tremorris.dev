<template>
  <UContainer class="pointer-events-auto">
    <UButton
      :variant="$route.name === 'index' ? 'solid' : 'ghost'"
      icon="i-line-md-file-document"
      :to="{ name: 'index' }"
      @click="$emit('nav')"
    >
      Resume
    </UButton>
    <UButton
      :variant="$route.name === 'projects' ? 'solid' : 'ghost'"
      icon="i-line-md-star"
      :to="{ name: 'projects' }"
      @click="$emit('nav')"
    >
      Projects
    </UButton>
    <UButton
      variant="ghost"
      icon="i-line-md-email"
      to="mailto:tremorrisdev@gmail.com"
      @click="$emit('nav')"
    >
      Email
    </UButton>
    <UButton
      variant="ghost"
      icon="i-line-md-phone-add"
      to="tel:5097684050"
      @click="$emit('nav')"
    >
      Phone
    </UButton>
    <UButton
      variant="ghost"
      icon="i-line-md-github-loop"
      to="https://github.com/tremorris1999"
      @click="$emit('nav')"
    >
      Github
    </UButton>
    <UButton
      variant="ghost"
      icon="i-line-md-linkedin"
      to="https://www.linkedin.com/in/trevor-a-morris/"
      @click="$emit('nav')"
    >
      LinkedIn
    </UButton>
  </UContainer>
</template>

<script setup lang="ts">
defineEmits<{
  nav: []
}>()
</script>
