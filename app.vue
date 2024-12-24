<template>
  <div
    id="root"
    class="bg-cool-50 absolute dark:bg-cool-900 w-full h-svh flex flex-col overflow-hidden"
  >
    <header
      class="w-full pt-4 sticky top-0 bg-cool-50 dark:bg-cool-900 touch-pan-down pointer-events-none"
    >
      <ClientOnly>
        <UButton
          v-if="!breakpoints.sm.value"
          icon="i-line-md-menu"
          class="absolute mt-3 ml-4 pointer-events-auto"
          @click="isMenuOpen = true"
        />
      </ClientOnly>
      <ClientOnly>
        <UButton
          :icon="
            $colorMode.value === 'dark'
              ? 'i-line-md-sunny-outline-loop'
              : 'i-line-md-moon-loop'
          "
          class="absolute right-0 mt-3 sm:bottom-0 sm:mb-2 mr-4 pointer-events-auto"
          @click="
            $colorMode.preference =
              $colorMode.preference === 'system'
                ? $colorMode.value === 'dark'
                  ? 'light'
                  : 'dark'
                : $colorMode.preference === 'dark'
                ? 'light'
                : 'dark'
          "
        />
      </ClientOnly>
      <p
        class="text-center text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
      >
        Trevor Morris
      </p>
      <p class="text-center text-lg text-gray-500 dark:text-gray-400">
        Full-stack Software Engineer
      </p>
      <ClientOnly>
        <template #fallback>
          <div class="h-10"></div>
        </template>
        <Nav
          v-show="breakpoints.sm.value"
          class="flex justify-around mt-2 mx-auto w-1/2"
        />
      </ClientOnly>
      <USlideover
        v-show="!breakpoints.sm.value"
        v-model="isMenuOpen"
        side="left"
        class="w-2/3"
      >
        <div class="ml-4 mt-4 mb-2 flex items-center">
          <UButton
            icon="i-line-md-menu-fold-left"
            @click="isMenuOpen = false"
          />
          <p class="ml-4 text-2xl font-bold">Trevor Morris</p>
        </div>
        <UDivider />
        <Nav
          class="flex flex-col w-full py-2"
          full
          @nav="isMenuOpen = false"
        />
      </USlideover>
      <UDivider class="mt-2" />
    </header>
    <NuxtPage />
    <UDivider />
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMenuOpen = ref(false)
</script>

<style></style>
